import express, { Request, Response, Router } from 'express';
import Orders from '../models/orders.model';
import { addOrderValidator } from '../utils/Validator';


const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        await addOrderValidator.validateAsync(req.body);

        const newOrder = new Orders();
        newOrder.mobileNumber = req.body.mobileNumber;
        newOrder.name = req.body.name;
        newOrder.product = req.body.product;
        newOrder.price = req.body.price;
        newOrder.deviceProblems = req.body.deviceProblems;
        newOrder.functionalDefects = req.body.functionalDefects;
        newOrder.accessoryList = req.body.accessoryList;

        await newOrder.save();

        res.status(200).send({ status: "success", message: "Order Placed successfully", data: {} });
    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to Place Order", error: { message: error.message } });
    }

});

router.get("/", async (req: Request, res: Response) => {

    try {
        let pageNo:number  = req.query.page ? parseInt(req.query.page as string) - 1 : 0
        const orders = await Orders.find({}, { _id: 0 }).skip(pageNo * 5).limit(5);
        const totalOrders = await Orders.countDocuments({})
        res.status(200).send({ status: "success", message: "Product category list fetched Successfully", data: { orders: [...orders], page: Math.ceil(totalOrders / 5) } });
    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to get category list", error: { message: error.message } });
    }

});
export default router;