export const createUserModel = ({ uid, name, email, role = 'user' }) => {
  return {
    uid,
    name,
    email,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
