import categoryRoutes from './categories/category.routes';
import foodRoutes from './foods/food.routes';

export default  app => {
    app.use('/api/v1/categories', categoryRoutes);
    app.use('/api/v1/foods', foodRoutes);
};