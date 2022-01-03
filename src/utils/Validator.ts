import Joi from "joi";


export const productValidator = Joi.object({
    category: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.string().required(),
    soldCount: Joi.string().required(),
    image: Joi.string().required(),
});


export const getBrandValidator = Joi.object({
    category: Joi.string().required()
});


export const getProductListValidator = Joi.object({
    category: Joi.string().required(), 
    brand: Joi.string().required(), 
});


export const addOrderValidator = Joi.object({
    mobileNumber: Joi.string().length(10).required(),
    name: Joi.string().required(),
    product:Joi.string().required(),
    price: Joi.string().required(),
    deviceProblems: Joi.array().items(Joi.string()),
    functionalDefects: Joi.array().items(Joi.string()),
    accessoryList: Joi.array().items(Joi.string()),
})