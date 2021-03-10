const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/scripts"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/node_modules/jquery/dist"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/referinte", function (req, res) {
  res.render("referinte");
});

app.get("/curs1", function (req, res) {
  res.render("curs1");
});

app.get("/curs2", function (req, res) {
  res.render("curs2");
});

app.get("/curs3", function (req, res) {
  res.render("curs3");
});

app.get("/curs4", function (req, res) {
  res.render("curs4");
});

app.get("/curs5", function (req, res) {
  res.render("curs5");
});

app.get("/curs6", function (req, res) {
  res.render("curs6");
});

app.get("/curs7", function (req, res) {
  res.render("curs7");
});

app.get("/curs8", function (req, res) {
  res.render("curs8");
});

app.get("/curs9", function (req, res) {
  res.render("curs9");
});

app.get("/curs10", function (req, res) {
  res.render("curs10");
});

app.get("/curs11", function (req, res) {
  res.render("curs11");
});

app.get("/curs12", function (req, res) {
  res.render("curs12");
});

app.get("/curs13", function (req, res) {
  res.render("curs13");
});

app.get("/curs14", function (req, res) {
  res.render("curs14");
});

app.get("/lab1", function (req, res) {
  res.render("lab1");
});

app.get("/lab2", function (req, res) {
  res.render("lab2");
});

app.get("/lab3", function (req, res) {
  res.render("lab3");
});

app.get("/lab4", function (req, res) {
  res.render("lab4");
});

app.get("/lab5", function (req, res) {
  res.render("lab5");
});

app.get("/lab6", function (req, res) {
  res.render("lab6");
});

app.get("/lab7", function (req, res) {
  res.render("lab7");
});

app.get("/lab8", function (req, res) {
  res.render("lab8");
});

app.get("/lab9", function (req, res) {
  res.render("lab9");
});

app.get("/lab10", function (req, res) {
  res.render("lab10");
});

app.get("/lab11", function (req, res) {
  res.render("lab11");
});

app.get("/lab12", function (req, res) {
  res.render("lab12");
});

app.get("/lab13", function (req, res) {
  res.render("lab13");
});

app.get("/lab14", function (req, res) {
  res.render("lab14");
});

app.get("/error", function (req, res) {
  res.render("error");
});

app.use(function (req, res) {
  res.status(404).render("error");
});

app.listen(8080);
