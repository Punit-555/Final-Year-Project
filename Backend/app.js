const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db");
const User = require("./models/user");
const Contact = require('./models/Contact');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// User Model
app.post("/signup", async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
  return      res.send("User Already Exist");
      // return res.status(400).send({ message: "User already exists" });
    }

    // Create new user
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    const doc = await user.save();

    console.log(doc);
    console.log(req.body);

    return res.status(200).send({ message: "Successful Response" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/contact", async (req, res) => {
  try {
    // Extract data from the request body
    const { email, message } = req.body;

    // Create a new contact document
    let contact = new Contact();
    contact.email = email;
    contact.message = message;

    const doc = await contact.save();

    console.log(doc);
    console.log(req.body);

    return res.status(200).send({ message: "Contact saved successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email } = req.body; 
    // Ensure the property name matches the request body key

    console.log("Hey, this is User Login:", email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User Not Found");
      return res.status(404).json({ message: "User not found" });
    } else {
      console.log("User Login Successfully!");
      return res.status(200).json({ message: "Sign-in successful", user });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ error: "Server error" });
  }
});




app.listen(8080, () => {
  console.log("Server is Listening on the PORT.");
});
