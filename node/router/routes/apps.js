/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
const express = require("express");
const request = require("request-promise-native");

module.exports = function() {
	var app = express.Router();

	app.get("/", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/refs", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/refs",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/instances", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/instances",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/instances/:instance_guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/instances/" + req.params.instance_guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/instances/:instance_guid/logs", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/instances/" + req.params.instance_guid + "/logs/download",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});		
	

	app.get("/:guid/instances/:instance_guid/operations", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/instances/" + req.params.instance_guid + "/operations",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/logs", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/logs",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/env", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/env",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/routes", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/routes",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/configuration", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/configuration",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

	app.get("/:guid/tasks", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/apps/" + req.params.guid + "/tasks",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	
	
	return app;
};	