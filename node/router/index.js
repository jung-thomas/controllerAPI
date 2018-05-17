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
    app.use("/node/routes", require("./routes/routes")());     
    app.use("/node/domains", require("./routes/domains")()); 
    app.use("/node/shared_domains", require("./routes/shared_domains")());       
    app.use("/node/trusted_certificates", require("./routes/trusted_certificates")());      
};