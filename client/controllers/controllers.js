// client view controllers

// home
var client_home = (req, res) => {
	res.render("client/views/index.njk");
};

module.exports = {
	client_home: client_home
}
