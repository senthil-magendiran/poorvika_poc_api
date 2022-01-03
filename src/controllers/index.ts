import express from 'express';
import ProductController from './product.controller';
import OrdersController from "./orders.controller";

const router = express.Router();

router.use("/products", ProductController);
router.use("/orders", OrdersController);

export default router;