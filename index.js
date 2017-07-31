const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

/* -- configure template engine -- */
nunjucks.configure({
    autoescape:true,
    express: app
});

/* -- define app routes -- */

// client
var client_routes = require("./client/routes.js");
app.use("/", client_routes);

// api
var api_routes = require("./api/routes.js");
app.use("/api", api_routes);

/* -- add static content -- */
app.use(express.static("public"));

/* additional listener */
app.listen(3000, () => {
	console.log("app running!");
});
