const Joi = require("joi");



const taskAddSchema = Joi.object({
    task: Joi.string().required(),
    completed: Joi.bool().required().default(false),
});



module.exports = {
    taskAddSchema,
}