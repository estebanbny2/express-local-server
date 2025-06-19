import express from 'express';
import { default as serverlessExpress } from '@vendia/serverless-express';
const app = express();
app.use(express.json());
let cars = [
    { id: 1, brand: 'Renault', model: 'Clio' },
    { id: 2, brand: 'Peugeot', model: '208' },
];
app.get('/cars', (_req, res) => {
    res.json(cars);
});
app.post('/cars', (req, res) => {
    const newCar = {
        id: Date.now(),
        brand: req.body.brand,
        model: req.body.model,
    };
    cars.push(newCar);
    res.status(201).json(newCar);
});
export default (req, res) => {
    const handler = serverlessExpress({ app });
    return handler(req, res);
};
