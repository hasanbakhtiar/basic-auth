const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const weatherSchema = mongoose.Schema({
    city: {
        type: String,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    temperature: {
        type: Number,
        require: true
    }

}, { timestamps: true });


const weatherValidate = (weather) => {
    const schema = new Joi.object({
        city: Joi.string().required(),
        month: Joi.string().required(),
        temperature: Joi.number().required()
    })

    return schema.validate(weather);
}



const Weather = mongoose.model("Weather", weatherSchema);
module.exports = { Weather, weatherValidate }