require("dotenv").config();
const express = require("express");
var parser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 4014;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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

app.get("/home", (req, res) => {
  res.render("home");
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
  var toEmail = "everythingvodas@gmail.com";
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

// app.post("/submit", (req, res) => {
//   const { dailyPriceInp, contentH3BFC } = req.body;
//   console.log(req.body);

//   // Store document in a cookie
//   res.cookie("dailyPriceInp", dailyPriceInp, { maxAge: 900000, httpOnly: true });
//   res.cookie("contentH3BFC", contentH3BFC, { maxAge: 900000, httpOnly: true });
//   res.send("Document saved in cookie!");
// });

// first form
// -------------------------------------------

// Handle form submission and store properties in cookies
// app.post("/submit1", (req, res) => {
//   const formData1 = req.body;
//   res.cookie("formData1", JSON.stringify(formData1), {
//     maxAge: 900000,
//     httpOnly: true,
//   });
//   console.log(JSON.stringify(formData1));
//   res.send("Form 1 data stored in a cookie!");
// });

app.post("/submit2", (req, res) => {
  const formData2 = req.body;
  res.cookie("formData2", JSON.stringify(formData2), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 2 data stored in a cookie!");
});

app.post("/submit3", (req, res) => {
  const formData3 = req.body;
  res.cookie("formData3", JSON.stringify(formData3), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 3 data stored in a cookie!");
});

app.post("/submit4", (req, res) => {
  const formData4 = req.body;
  res.cookie("formData4", JSON.stringify(formData4), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 4 data stored in a cookie!");
});

app.post("/submit5", (req, res) => {
  const formData5 = req.body;
  res.cookie("formData5", JSON.stringify(formData5), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 5 data stored in a cookie!");
});

app.post("/submit6", (req, res) => {
  const formData6 = req.body;
  res.cookie("formData6", JSON.stringify(formData6), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 6 data stored in a cookie!");
});

app.post("/submit7", (req, res) => {
  const formData7 = req.body;
  res.cookie("formData7", JSON.stringify(formData7), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 7 data stored in a cookie!");
});

app.post("/submit8", (req, res) => {
  const formData8 = req.body;
  res.cookie("formData8", JSON.stringify(formData8), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 8 data stored in a cookie!");
});

app.post("/submit9", (req, res) => {
  const formData9 = req.body;
  res.cookie("formData9", JSON.stringify(formData9), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 9 data stored in a cookie!");
});

app.post("/submit10", (req, res) => {
  const formData10 = req.body;
  res.cookie("formData10", JSON.stringify(formData10), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 10 data stored in a cookie!");
});

app.post("/submit11", (req, res) => {
  const formData11 = req.body;
  res.cookie("formData11", JSON.stringify(formData11), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 11 data stored in a cookie!");
});

app.post("/submit12", (req, res) => {
  const formData12 = req.body;
  res.cookie("formData12", JSON.stringify(formData12), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 12 data stored in a cookie!");
});

app.post("/submit13", (req, res) => {
  const formData13 = req.body;
  res.cookie("formData13", JSON.stringify(formData13), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 13 data stored in a cookie!");
});

app.post("/submit14", (req, res) => {
  const formData14 = req.body;
  res.cookie("formData14", JSON.stringify(formData14), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 14 data stored in a cookie!");
});

app.post("/submit15", (req, res) => {
  const formData15 = req.body;
  res.cookie("formData15", JSON.stringify(formData15), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 15 data stored in a cookie!");
});

app.post("/submit16", (req, res) => {
  const formData16 = req.body;
  res.cookie("formData16", JSON.stringify(formData16), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 16 data stored in a cookie!");
});

app.post("/submit17", (req, res) => {
  const formData17 = req.body;
  res.cookie("formData17", JSON.stringify(formData17), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 17 data stored in a cookie!");
});

app.post("/submit18", (req, res) => {
  const formData18 = req.body;
  res.cookie("formData18", JSON.stringify(formData18), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 18 data stored in a cookie!");
});

app.post("/submit19", (req, res) => {
  const formData19 = req.body;
  res.cookie("formData19", JSON.stringify(formData19), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 19 data stored in a cookie!");
});

app.post("/submit20", (req, res) => {
  const formData20 = req.body;
  res.cookie("formData20", JSON.stringify(formData20), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 20 data stored in a cookie!");
});

app.post("/submit21", (req, res) => {
  const formData21 = req.body;
  res.cookie("formData21", JSON.stringify(formData21), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 21 data stored in a cookie!");
});

app.post("/submit22", (req, res) => {
  const formData22 = req.body;
  res.cookie("formData22", JSON.stringify(formData22), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 22 data stored in a cookie!");
});

app.post("/submit23", (req, res) => {
  const formData23 = req.body;
  res.cookie("formData23", JSON.stringify(formData23), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 23 data stored in a cookie!");
});

app.post("/submit24", (req, res) => {
  const formData24 = req.body;
  res.cookie("formData24", JSON.stringify(formData24), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 24 data stored in a cookie!");
});

app.post("/submit25", (req, res) => {
  const formData25 = req.body;
  res.cookie("formData25", JSON.stringify(formData25), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 25 data stored in a cookie!");
});

app.post("/submit26", (req, res) => {
  const formData26 = req.body;
  res.cookie("formData26", JSON.stringify(formData26), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 26 data stored in a cookie!");
});

app.post("/submit27", (req, res) => {
  const formData27 = req.body;
  res.cookie("formData27", JSON.stringify(formData27), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 27 data stored in a cookie!");
});

app.post("/submit28", (req, res) => {
  const formData28 = req.body;
  res.cookie("formData28", JSON.stringify(formData28), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 28 data stored in a cookie!");
});

app.post("/submit29", (req, res) => {
  const formData29 = req.body;
  res.cookie("formData29", JSON.stringify(formData29), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 29 data stored in a cookie!");
});

app.post("/submit30", (req, res) => {
  const formData30 = req.body;
  res.cookie("formData30", JSON.stringify(formData30), {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Form 30 data stored in a cookie!");
});

app.get("/retrieve", (req, res) => {
  const formData1 = req.cookies.formData1
    ? JSON.parse(req.cookies.formData1)
    : null;
  const formData2 = req.cookies.formData2
    ? JSON.parse(req.cookies.formData2)
    : null;
  const formData3 = req.cookies.formData3
    ? JSON.parse(req.cookies.formData3)
    : null;
  const formData4 = req.cookies.formData4
    ? JSON.parse(req.cookies.formData4)
    : null;
  const formData5 = req.cookies.formData5
    ? JSON.parse(req.cookies.formData5)
    : null;
  const formData6 = req.cookies.formData6
    ? JSON.parse(req.cookies.formData6)
    : null;
  const formData7 = req.cookies.formData7
    ? JSON.parse(req.cookies.formData7)
    : null;
  const formData8 = req.cookies.formData8
    ? JSON.parse(req.cookies.formData8)
    : null;
  const formData9 = req.cookies.formData9
    ? JSON.parse(req.cookies.formData9)
    : null;
  const formData10 = req.cookies.formData10
    ? JSON.parse(req.cookies.formData10)
    : null;
  const formData11 = req.cookies.formData11
    ? JSON.parse(req.cookies.formData11)
    : null;
  const formData12 = req.cookies.formData12
    ? JSON.parse(req.cookies.formData12)
    : null;
  const formData13 = req.cookies.formData13
    ? JSON.parse(req.cookies.formData13)
    : null;
  const formData14 = req.cookies.formData14
    ? JSON.parse(req.cookies.formData14)
    : null;
  const formData15 = req.cookies.formData15
    ? JSON.parse(req.cookies.formData15)
    : null;
  const formData16 = req.cookies.formData16
    ? JSON.parse(req.cookies.formData16)
    : null;
  const formData17 = req.cookies.formData17
    ? JSON.parse(req.cookies.formData17)
    : null;
  const formData18 = req.cookies.formData18
    ? JSON.parse(req.cookies.formData18)
    : null;
  const formData19 = req.cookies.formData19
    ? JSON.parse(req.cookies.formData19)
    : null;
  const formData20 = req.cookies.formData20
    ? JSON.parse(req.cookies.formData20)
    : null;
  const formData21 = req.cookies.formData21
    ? JSON.parse(req.cookies.formData21)
    : null;
  const formData22 = req.cookies.formData22
    ? JSON.parse(req.cookies.formData22)
    : null;
  const formData23 = req.cookies.formData23
    ? JSON.parse(req.cookies.formData23)
    : null;
  const formData24 = req.cookies.formData24
    ? JSON.parse(req.cookies.formData24)
    : null;
  const formData25 = req.cookies.formData25
    ? JSON.parse(req.cookies.formData25)
    : null;
  const formData26 = req.cookies.formData26
    ? JSON.parse(req.cookies.formData26)
    : null;
  const formData27 = req.cookies.formData27
    ? JSON.parse(req.cookies.formData27)
    : null;
  const formData28 = req.cookies.formData28
    ? JSON.parse(req.cookies.formData28)
    : null;
  res.json({
    formData1,
    formData2,
    formData3,
    formData4,
    formData5,
    formData6,
    formData7,
    formData8,
    formData9,
    formData10,
    formData11,
    formData12,
    formData13,
    formData14,
    formData15,
    formData16,
    formData17,
    formData18,
    formData19,
    formData20,
    formData21,
    formData22,
    formData23,
    formData24,
    formData25,
    formData26,
    formData27,
    formData28,
  });


  let cart_item_count = 0;

  if (formData28) {
    console.log(`formData1-Quantity: ${formData1.quantity}`);
  } else if (formData28 === null) {
    console.log('null');
  }

  });

app.listen(PORT, () => {
  console.log("server started in port 4014");
});
