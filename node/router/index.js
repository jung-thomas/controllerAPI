/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/node", require("./routes/hello")());
    app.use("/node/users", require("./routes/users")());	
};