import express, { Request, Response, Router } from 'express';
import Products from '../models/product.model';
import { getBrandValidator, getProductListValidator, productValidator } from '../utils/Validator';




const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        await productValidator.validateAsync(req.body);

        const newProduct = new Products();
        newProduct.category = req.body.category;
        newProduct.brand = req.body.brand;
        newProduct.model = req.body.model;
        newProduct.price = req.body.price;
        newProduct.soldCount = req.body.soldCount;
        newProduct.image = req.body.image;
        await newProduct.save();

        res.status(200).send({ status: "success", message: "Product saved Successfully", data: {} });

    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to add product", error: { message: error.message } });
    }
});

router.get("/category", async (req: Request, res: Response) => {

    try {
        const categories = await Products.find({}, { category: 1, _id: 0 });
        const categoryList = filterUniqueItems(categories, "category");

        res.status(200).send({ status: "success", message: "Product category list fetched Successfully", data: { category: [...categoryList] } });
    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to get category list", error: { message: error.message } });
    }

});


router.get("/brand", async (req: Request, res: Response) => {

    try {
        await getBrandValidator.validateAsync(req?.query);

        const brands = await Products.find({category: req?.query?.category}, { brand: 1, _id: 0 });
        const brandList = filterUniqueItems(brands, "brand");
        res.status(200).send({ status: "success", message: "Product category list fetched Successfully", data: { brand: [...brandList]} });
    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to get brand list", error: { message: error.message } });
    }

})

router.get("/list", async (req: Request, res: Response) => {
    try {
        await getProductListValidator.validateAsync(req?.query);
        const {category, brand} = req.query;

        const products = await Products.find({category, brand});

        res.status(200).send({ status: "success", message: "Product category list fetched Successfully", data: { products } });
    } catch (error) {
        res.status(400).send({ status: "failure", message: "Unable to get brand list", error: { message: error.message } });
    }
});


const filterUniqueItems = (source: any [], keyValue: string) => [...new Set(source?.map((item) => item[keyValue] ))];

export default router;