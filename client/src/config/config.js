export const envs = {
  base_url: import.meta.env.VITE_API_URL,
  firebase_api_key: import.meta.env.VITE_FIREBASE_API_KEY,
  firebase_auth_domain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  firebase_project_id: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  firebase_storage_bucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  firebase_messaging_sender_id: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID,
  firebase_app_id: import.meta.env.VITE_FIREBASE_APP_ID,
  firebase_measurement_id: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
