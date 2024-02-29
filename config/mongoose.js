/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");

/*******************MAKING CONNECTION***************************/
mongoose.connect("mongodb+srv://kondruvasu143:ULswZpnqb90Hep6Q@cluster0.hl3ert3.mongodb.net/");
//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});