require("dotenv").config();
const express = require("express");
var parser = require("body-parser");
const path = require("path");
const PORT = 4014;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(parser.json());
app.use(function (req, res, next) {
  res.locals.userValue = null;
  next();
});

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the public dir
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the root path '/'
app.get("/", (req, res) => {
  res.render("index", { name: "World" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { name: "World" });
});

app.get("/gallery", (req, res) => {
  res.render("gallery", { name: "World" });
});

app.get("/rentals", (req, res) => {
  res.render("rentals", { name: "World" });
});

app.get("/services", (req, res) => {
  res.render("services", { name: "World" });
});

app.get("/winter-sale", (req, res) => {
  res.render("winter-sale", { name: "World" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "World" });
});

app.get("/blog-details", (req, res) => {
  res.render("blog-details", { name: "World" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { name: "World" });
});

app.get("/portfolio-details", (req, res) => {
  res.render("portfolio-details", { name: "World" });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { name: "World" });
});

app.get("/team", (req, res) => {
  res.render("team", { name: "World" });
});

// add to wish list function

// sending mails
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "canicemichael@gmail.com",
    pass: process.env.appPass,
  },
});



// Send the mail
app.post("/sendMail", function (req, res) {
 var name = req.body.name;
 var subject = req.body.subject;
 var fromEmail = req.body.email;
 var toEmail = "canicecodes@gmail.com";
 var message = req.body.message;

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    text: message,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
});

app.get("/contact2", function (req, res) {
  res.render("home", {
    topicHead: "Student Form",
  });
  console.log("user accessing Home page");
});

app.post("/student/add", function (req, res) {
  var student = {
    first: req.body.fname,
    last: req.body.lname,
  };
  console.log(student);
  res.render("home", {
    userValue: student,
    topicHead: "Student Form",
  });
  //res.json(student);
});

app.listen(PORT, () => {
  console.log("server started in port 4014");
});
