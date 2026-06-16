import authRouter from './auth.routes.js';

const allRoutes = (app) => {
  app.use('/api/auth', authRouter);
};

export default allRoutes;
