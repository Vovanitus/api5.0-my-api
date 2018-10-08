import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';

export default app => {
    app.use('/uploads', express.static('uploads'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));
};