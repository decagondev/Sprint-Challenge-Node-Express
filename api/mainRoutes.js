const express = require("express");

// setup express reouter
const router = express.Router();

// import project routes
const projectRoutes = require("./projectRoutes");

// import the action routes
const actionRoutes = require("./actionsRoutes");

// add a route to the project routes
router.use("/projects", projectRoutes);

// add a route to the action routes
router.use("/actions", actionRoutes);

// export router
module.exports = router;
