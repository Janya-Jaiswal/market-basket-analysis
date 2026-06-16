import { auth, db } from '../config/db/connection.js';
import { createUserModel } from '../models/user.model.js';

export const signupService = async ({ name, email, password, role }) => {
  const user = await auth.createUser({
    displayName: name,
    email,
    password,
  });

  const userData = createUserModel({
    uid: user.uid,
    name,
    email,
    role: role || 'user',
  });

  await db.collection('users').doc(user.uid).set(userData);

  return userData;
};

export const loginService = async ({ email, password }) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  const userDoc = await db.collection('users').doc(data.localId).get();

  if (!userDoc.exists) {
    throw new Error('User not found');
  }

  return {
    token: data.idToken,
    refreshToken: data.refreshToken,
    expiresIn: data.expiresIn,
    user: userDoc.data(),
  };
};
