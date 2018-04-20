/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");
var async = require("async");

module.exports = function() {
	var app = express.Router();

	//Hello Router
	app.get("/", (req, res) => {
		let output = `Node.js based Controller API Examples`;
		/*			<a href="${req.baseUrl}/example1">/example1</a> - Simple Database Select - In-Line Callbacks</br> 
					<a href="${req.baseUrl}/example2">/example2</a> - Simple Database Select - Async Waterfall</br> 
					<a href="${req.baseUrl}/example3">/example3</a> - Call Stored Procedure</br> 
					<a href="${req.baseUrl}/example4/1">/example4</a> - Call Stored Procedure with Input = Partner Role 1 </br> 
					<a href="${req.baseUrl}/example4/2">/example4</a> - Call Stored Procedure with Input = Partner Role 2 </br> 
					<a href="${req.baseUrl}/example5">/example5</a> - Call Two Stored Procedures in Parallel Because We Can!</br> 
					<a href="${req.baseUrl}/whoAmI">/whoAmI</a> - Look at the session information</br> 
					<a href="${req.baseUrl}/hdb">/hdb</a> - Small DB example - port of hdb.xsjs</br> 
					<a href="${req.baseUrl}/os">/os</a> - Operating System Information - port of os.xsjs</br>`;*/
		res.type("text/html").status(200).send(output);
	});

	app.get("/whoAmI", (req, res) => {
		let userContext = req.authInfo;
		let result = JSON.stringify({
			userContext: userContext
		});
		res.type("application/json").status(200).send(result);
	});

	app.get("/env", (req, res) => {
		res.type("application/json").status(200).send(JSON.stringify(process.env));
	});

	app.get("/org", (req, res) => {
		let VCAP = JSON.parse(process.env.VCAP_APPLICATION);
		res.type("application/json").status(200).send(JSON.stringify(VCAP.organization_name));
	});

	app.get("/space", (req, res) => {
		let VCAP = JSON.parse(process.env.VCAP_APPLICATION);
		res.type("application/json").status(200).send(JSON.stringify(VCAP.space_name));
	});

	app.get("/controller", (req, res) => {
		var obj = JSON.parse(process.env.destinations);
		res.type("application/json").status(200).send(JSON.stringify(obj));
	});


	app.get("/userinfo", function(req, res) {
		let xssec = require("@sap/xssec");
		let xsenv = require("@sap/xsenv");
		let accessToken;
		let authWriteScope = false;
		let authReadScope = false;
		let controllerAdminScope = true;
		let userInfo = {
			"name": req.user.id,
			"familyName": req.user.name.familyName,
			"emails": req.user.emails,
			"scopes": [],
			"identity-zone": req.authInfo.identityZone
		};
		if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
			accessToken = req.headers.authorization.split(" ")[1];
		}
		let uaa = xsenv.getServices({
			uaa: {
				tag: "xsuaa"
			}
		}).uaa;
		xssec.createSecurityContext(accessToken, uaa, function(error, securityContext) {
			if (error) {
				console.log("Security Context creation failed");
				return;
			}
			console.log("Security Context created successfully");
			userInfo.scopes = securityContext.scopes;
			console.log("Scope checked successfully");
		});

		res.status(200).json(userInfo);
	});

	app.get("/info", (req, res) => {
		let request = require("request");
		let options = {
			url: global.__controller + "info"
		};
		request.get(
			options,
			function(error, response, body) {
				if (error) {
					console.log(error.toString());
					res.type("text/html").status(200).send(error.toString());
					return;
				}
				res.type("application/json").status(200).send(body);
			}
		);
	});

	return app;
};