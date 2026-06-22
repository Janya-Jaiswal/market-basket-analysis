import authRouter from './auth.routes.js';
import productRouter from './product.routes.js';
import cartRouter from './cart.routes.js';
import purchaseRouter from './purchasedHistory.routes.js';

const allRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/products', productRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/purchase', purchaseRouter);
};

export default allRoutes;
