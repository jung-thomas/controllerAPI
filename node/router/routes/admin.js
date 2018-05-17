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
			url: global.__controller + "/v2/admin/controller/info",
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

	app.get("/controller/profile", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/controller/profile",
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

	app.get("/controller/profile/properties", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/controller/profile/properties",
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

	app.get("/deas", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/deas",
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
	
	app.get("/deas/:guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/deas/" + req.params.guid,
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

	app.get("/blob-store", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/blob-store/info",
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

	app.get("/blob-store/sets", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/blob-store/sets",
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

	app.get("/tenant", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/admin/tenant/info",
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