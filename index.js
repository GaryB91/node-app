const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure({
    autoescape:true,
    express: app
});

app.get("/", (req, res) => {
	res.render("index.njk");
});

app.listen(3000, () => {
	console.log("app running!");
});
