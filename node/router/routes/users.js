/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");
var async = require("async");

module.exports = function() {
	var app = express.Router();

	app.get("/", (req, res) => {
		let request = require("request");
		var options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/users",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
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

	app.get("/:guid", (req, res) => {
		let request = require("request");
		var options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/users/" + req.params.guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
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

	app.get("/uaa/:user_id", (req, res) => {
		let request = require("request");
		let options = {
			url: global.__controller + "/v2/info"
		};
		request.get(
			options,
			function(error, response, body) {
				if (error) {
					console.log(error.toString());
					res.type("text/html").status(200).send(error.toString());
					return;
				}

				var options = {
					method: "GET",
					json: true,
					url: JSON.parse(body).authorizationEndpoint  + "/sap/rest/user/name/" + req.params.user_id,
					auth: {}
				};
				console.log(options.url.toString());
				options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
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
			}
		);

	});
	
	app.get("/uaa2/rolecollections", (req, res) => {
		let request = require("request");
		let options = {
			url: global.__controller + "/v2/info"
		};
		request.get(
			options,
			function(error, response, body) {
				if (error) {
					console.log(error.toString());
					res.type("text/html").status(200).send(error.toString());
					return;
				}

				var options = {
					method: "GET",
					json: true,
					url: JSON.parse(body).authorizationEndpoint  + "/sap/rest/authorization/rolecollections",
					auth: {}
				};
				console.log(options.url.toString());
				options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
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
			}
		);

	});
	
	return app;
};