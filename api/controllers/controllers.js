var login_controller = (req, res) => {
	res.json({success: false});
};

var signup_controller = (req, res) => {
	res.json({success: false});
};

var stream_config_controller = (req, res) => {
	res.json({success: false});
};

var reg_data_create_ctrl = (req, res) => {
	res.json({success: false});
};

var reg_data_get_ctrl = (req, res) => {
	res.json({success: false});
};

var reg_data_update_ctrl = (req, res) => {
	res.json({success: false});
};


module.exports = {
	login: login_controller,
	signup: signup_controller,
	stream_config: stream_config_controller,
	registration_data_create: reg_data_create_ctrl,
	registration_data_detail: reg_data_get_ctrl,
	registration_data_update: reg_data_update_ctrl	
};
