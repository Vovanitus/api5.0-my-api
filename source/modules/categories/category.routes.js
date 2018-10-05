import { Router } from 'express';
import * as categoryController from './category.controllers';

const routes = new Router();

routes.post('/', categoryController.createCategory);
routes.get('/', categoryController.getAllCategory);
routes.get('/:id', categoryController.getCategoryById);
routes.put('/:id', categoryController.updateCategory);
routes.delete('/:id', categoryController.deleteCategory);

export default routes;