const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

///////////////////////////////

require("./db/conn");

const Register = require("./models/register");

////////////////////////////////////////

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", template_path);

hbs.registerPartials(partials_path)
// app.set("partials", partials_path);



////////////////////////

app.get("/", (req, res) => {
    // res.send("hello there from App.js")
    res.render("index");
});


app.get("/register", (req, res) => {
    res.render("register")
})

//create a new user from below code
app.post("/register", async (req, res) => {

    // try {
    //     let result = await res.json();
    //     console.log(result)
    //     res.render("index");
    // }
    try {
        console.log(req.body.userEmail);
        res.send(req.body.userEmail)


        const username = req.body.username;
        const userEmail = req.body.userEmail;
        const password = req.body.userPassword;
        const cPassword = req.body.confirmpassword;
        const gender = req.body.gender;

        if (password === cPassword) {

        }
        else {
            alert("password is not matching")
        }


    }

    catch (e) {
        console.log("error messss", e)
    }

})


/////////////////////////////////////////

app.listen(port, () => {

    console.log(`\nlistening on ${port}\n`)
})