import { Router } from 'express';
import * as foodController from './food.controllers';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    //умова фільтрації фалів
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});
const routes = new Router();

routes.post('/',
    upload.single('foodImage'),
    foodController.createFood,
);
routes.get('/', foodController.getFoodsList);
routes.get('/:id', foodController.getFoodById);
routes.patch('/:id', foodController.updateFood);
routes.delete('/:id', foodController.deleteFood);

export default routes;