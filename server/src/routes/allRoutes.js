import authRouter from './auth.routes.js';
import productRouter from './product.routes.js';

const allRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
};

export default allRoutes;
