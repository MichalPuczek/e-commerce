import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// IMPORT == ROUTERS
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

// Parsing the body of http request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to MONGODB
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/geekstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// USERS
app.use('/api/users', userRouter);
// PRODUCTS
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// MW = error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});