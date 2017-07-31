// client app routes

var express = require("express");
var router = express.Router();
var controllers = require("./controllers/controllers.js");

// Client home page
router.get("/", controllers.client_home);


module.exports = router;
