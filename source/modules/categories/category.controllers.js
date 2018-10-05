import HTTPStatus from 'http-status';
import  Category from './category.model';

export async function createCategory(req, res) {
    try {
        const  category = await Category.create(req.body);
        return res.status(HTTPStatus.CREATED).json(category);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getAllCategory(req, res) {
    try {
        const category = await Category.find();
        return res.status(HTTPStatus.OK).json(category);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function getCategoryById(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        return res.status(HTTPStatus.OK).json(category.toJSON());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function updateCategory(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        category.name = req.body.name;
        return res.status(HTTPStatus.OK).json(await category.save());
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
export async function deleteCategory(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        await category.remove();
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}