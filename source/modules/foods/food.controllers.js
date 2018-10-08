import HTTPStatus from 'http-status';
import Food from './food.model';

export async function createFood(req, res) {
    try {
        // console.log(req.file); інфа про доданий файл
        const food = await Food.create(req.body);
        return res.status(HTTPStatus.CREATED).json(food);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getFoodsList(req, res) {
    const limit = parseInt(req.query.limit, 0);
    const skip = parseInt(req.query.skip, 0);
    try {
        const foods = await Food.list({ limit, skip });
        return res.status(HTTPStatus.OK).json(foods);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getFoodById(req, res) {
    try {
        const food = await Food.findById(req.params.id).populate('category');
        return res.status(HTTPStatus.OK).json(food);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function updateFood(req, res) {
    try {
        const food = await Food.findById(req.params.id);
        Object.keys(req.body).forEach(key => {
            food[key] = req.body[key];
        });
        return res.status(HTTPStatus.OK).json(await food.save());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function deleteFood(req, res) {
    try {
        const food = await Food.findById(req.params.id);
        await food.remove();
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}