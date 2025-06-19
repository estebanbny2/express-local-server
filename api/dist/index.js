"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
const handler = (0, serverless_express_1.default)({ app });
exports.default = handler;
