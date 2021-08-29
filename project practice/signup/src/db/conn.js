const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registrationData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,

}).then(() => {
    console.log("connection established successfully");
}).catch((e) => {
    console.log("connection errorrrr:", e)
})

