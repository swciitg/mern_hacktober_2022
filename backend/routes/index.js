import express from 'express'
import inventoryRouter from './inventory.js';


const router = express.Router();



router.use('/inventory', inventoryRouter);

export default router;