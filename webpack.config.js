const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaultConfig,
	output: {
		...defaultConfig.output,
		library: "default",
		libraryTarget: "commonjs",
	},
};
