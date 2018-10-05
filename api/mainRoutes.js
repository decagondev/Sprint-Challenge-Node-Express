const express = require("express");

// setup express reouter
const router = express.Router();

// import the action routes
const actionRoutes = require("./actionsRoutes");

// add a route to the action routes
router.add("/actions", actionRoutes);
