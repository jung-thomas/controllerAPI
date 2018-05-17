/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/node", require("./routes/hello")());
    app.use("/node/users", require("./routes/users")());	
    app.use("/node/admin", require("./routes/admin")());    
    app.use("/node/organizations", require("./routes/organizations")());   
    app.use("/node/spaces", require("./routes/spaces")());   
    app.use("/node/apps", require("./routes/apps")());    
    app.use("/node/buildpacks", require("./routes/buildpacks")());     
    app.use("/node/runtimes", require("./routes/runtimes")());     
};