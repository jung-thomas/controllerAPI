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
			url: global.__controller + "/v2/monitoring",
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

	app.get("/live", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/live",
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

	app.get("/info", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/info",
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
	
	app.get("/statistics", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/statistics",
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

	app.get("/history", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/history",
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

	app.get("/forapps", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/data/forapps",
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

	app.get("/workload", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/workload",
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

	app.get("/workload/live", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/workload/live",
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
	
	app.get("/workload/:guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/monitoring/workload/" + req.params.guid,
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