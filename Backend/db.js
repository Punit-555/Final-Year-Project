const mongoose = require("mongoose");

// Punit : "mongodb+srv://Punit:punit123@cluster0.a9t3vnt.mongodb.net/finalProjectDB?retryWrites=true&w=majority"
mongoose
  .connect(
    "mongodb+srv://rahulDB:rahul@cluster0.eefw0tb.mongodb.net/projectDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database  Connected Succesfully!");
  })
  .catch((err) => {
    console.log(`${err}`);
  });

module.exports = mongoose;
