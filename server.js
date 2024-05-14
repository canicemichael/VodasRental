require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = 4014;
const app = express();

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

app.listen(PORT, () => {
  console.log("server started in port 4014");
});
