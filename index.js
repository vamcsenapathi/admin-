const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// about page
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

//shop page
app.get("/shop", function (req, res) {
  res.sendFile(__dirname + "/views/shop.html");
});

//cart page

app.get("/cart", function (req, res) {
  res.sendFile(__dirname + "/views/cart.html");
});

// checkout page
app.get("/checkout", function (req, res) {
  res.sendFile(__dirname + "/views/checkout.html");
});

//Account page
app.get("/my-account", function (req, res) {
  res.sendFile(__dirname + "/views/my-account.html");
});

//wishlist page
app.get("/wishlist", function (req, res) {
  res.sendFile(__dirname + "/views/wishlist.html");
});

//shopdetail page
app.get("/shop-detail", function (req, res) {
  res.sendFile(__dirname + "/views/shop-detail.html");
});

//service page

app.get("/service", function (req, res) {
  res.sendFile(__dirname + "/views/service.html");
});

//contact page

app.get("/contact-us", function (req, res) {
  res.sendFile(__dirname + "/views/contact-us.html");
});

//login  page
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/views/login.html");
});

//create account

app.get("/createaccount", function (req, res) {
  res.sendFile(__dirname + "/views/create-account.html");
});

// Admin portal

// dashboad page
app.get("/admin/dashboard", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/index.html");
});
//product grid
app.get("/admin/productgrid", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/ecom-product-grid.html");
});
//customers
app.get("/admin/customers", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/ecom-customers.html");
});

//Dark
app.get("/admin/darkdashboard", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/index-2.html");
});

//orders list
app.get("/admin/orderslist", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/orders-list.html");
});

//orders Details
app.get("/admin/orderdetails", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/order-detail.html");
});

//Customers list
app.get("/admin/customerslist", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/customer-list.html");
});
// analytics
app.get("/admin/analytics", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/analytics.html");
});
//review
app.get("/admin/reviews", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/reviews.html");
});
//admin login
app.get("/admin/login", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/login.html");
});

//page register
app.get("/admin/register", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/page-register.html");
});
//data table
app.get("/admin/datatable", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/table-datatable-basic.html");
});
//restaurants
app.get("/admin/restaurants", function (req, res) {
  res.sendFile(__dirname + "/views/Admin/restaurants.html");
});

app.listen(8000, () => console.log("Succcessfully server started."));
