import { Router } from 'express';
import * as foodController from './food.controllers';

const routes = new Router();

routes.post('/', foodController.createFood);
routes.get('/', foodController.getFoodsList);
routes.get('/:id', foodController.getFoodById);
routes.patch('/:id', foodController.updateFood);
routes.delete('/:id', foodController.deleteFood);

export default routes;