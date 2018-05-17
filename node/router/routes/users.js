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
			url: global.__controller + "/v2/users",
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
			url: global.__controller + "/v2/users/" + req.params.guid,
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

	app.get("/uaa/:user_id", async(req, res) => {
		let options = {
			url: global.__controller + "/v2/info"
		};
		try {
			let body = await request.get(options);
			let optionsInner = {
				method: "GET",
				json: true,
				url: JSON.parse(body).authorizationEndpoint + "/sap/rest/user/name/" + req.params.user_id,
				auth: {}
			};
			console.log(optionsInner.url.toString());
			optionsInner.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
			let bodyInner = await request.get(optionsInner);
			return res.type("application/json").status(200).send(bodyInner);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/uaa2/rolecollections/", async (req, res) => {
		let options = {
			url: global.__controller + "/v2/info"
		};
		try {
			let body = await request.get(options);
			let optionsInner = {
				method: "GET",
				json: true,
				url: JSON.parse(body).authorizationEndpoint + "/sap/rest/authorization/rolecollections/",
				auth: {}
			};
			console.log(optionsInner.url.toString());
			optionsInner.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
			let bodyInner = await request.get(optionsInner);
			return res.type("application/json").status(200).send(bodyInner);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/uaa2/rolecollections/:roleCollectionName", async (req, res) => {
		let options = {
			url: global.__controller + "/v2/info"
		};
		try {
			let body = await request.get(options);
			let optionsInner = {
				method: "GET",
				json: true,
				url: JSON.parse(body).authorizationEndpoint + "/sap/rest/authorization/rolecollections/" + req.params.roleCollectionName,
				auth: {}
			};
			console.log(optionsInner.url.toString());
			optionsInner.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
			let bodyInner = await request.get(optionsInner);
			return res.type("application/json").status(200).send(bodyInner);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/uaa2/rolecollections/:roleCollectionName/roles", async (req, res) => {
		let options = {
			url: global.__controller + "/v2/info"
		};
		try {
			let body = await request.get(options);
			let optionsInner = {
				method: "GET",
				json: true,
				url: JSON.parse(body).authorizationEndpoint + "/sap/rest/authorization/rolecollections/" + req.params.roleCollectionName + "/roles",
				auth: {}
			};
			console.log(optionsInner.url.toString());
			optionsInner.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
			let bodyInner = await request.get(optionsInner);
			return res.type("application/json").status(200).send(bodyInner);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});
	
	return app;
};