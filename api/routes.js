// api app routes

var express = require("express");
var router = express.Router();
var controllers = require("./controllers/controllers.js");

// login
router.post("/login", controllers.login);

// signup
router.post("/signup", controllers.signup);

// get input stream config
router.get("/stream-config/:stream_id", controllers.stream_config);

// create new RegistrationDataCollection
router.post("/registration-data", controllers.registration_data_create);

// get RegistrationDataCollection
router.get("/registration-data/:collection_id", controllers.registration_data_detail);

// update RegistrationDataCollection
router.put("/registration-data/:collection_id", controllers.registration_data_update);

module.exports = router;
