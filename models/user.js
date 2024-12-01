
const Joi = require("joi");
const { default: mongoose, Schema } = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user'],
        default: 'user'
    },
    order: [{ type: Schema.Types.ObjectId, ref: "Order" }],


}, { timestamps: true })


const registerValidate = (user) => {
    const schema = new Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        email: Joi.string().min(7).max(30).email().required(),
        phone: Joi.string().min(7).max(20).required(),
        password: Joi.string().min(8).required(),
        role: Joi.string()
    })

    return schema.validate(user);
}



const loginValidate = (user) => {
    const schema = new Joi.object({
        email: Joi.string().min(7).max(20).email(),
        password: Joi.string().min(8).required(),
    })

    return schema.validate(user);
}

userSchema.methods.createAuthToken = function () {
    const decodedToken = jwt.sign({ _id: this._id, name: this.name, surname: this.surname, email: this.email, phone: this.phone, role: this.role, }, 'jwtPrivateKey')
    return decodedToken;
}

const User = mongoose.model("User", userSchema);
module.exports = { User, registerValidate, loginValidate }