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
    app.use("/node/service_brokers", require("./routes/service_brokers")());     
    app.use("/node/service_plans", require("./routes/service_plans")());    
    app.use("/node/service_instances", require("./routes/service_instances")());     
    app.use("/node/service_bindings", require("./routes/service_bindings")());   
    app.use("/node/services", require("./routes/services")());   
    app.use("/node/service_keys", require("./routes/service_keys")());     
    app.use("/node/user_provided_service_instances", require("./routes/user_provided_service_instances")());   
    app.use("/node/jobs", require("./routes/jobs")());  
    app.use("/node/config", require("./routes/config")());  
    app.use("/node/monitoring", require("./routes/monitoring")());        
};