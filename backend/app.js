import express from 'express';
import dotenv from 'dotenv';


const app = express();
dotenv.config();




app.get('/', (req, res) => {
    return res.status(200).json(`Hello World`);
})


app.listen(process.env.PORT, () => {
    console.log(`listening in on port ${process.env.PORT}!`);
})