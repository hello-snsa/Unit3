const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,

    },
    userEmail: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

//Now we need to create a collection

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;