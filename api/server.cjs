const express = require('express');
const app = express();

app.use(express.json());

let cars = [
    { id: 1, brand: 'Renault', model: 'Clio' },
    { id: 2, brand: 'Peugeot', model: '208' },
];

app.get('/cars', (req, res) => {
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

app.listen(3000, () => {
    console.log('✅ Server is running at http://localhost:3000');
});
