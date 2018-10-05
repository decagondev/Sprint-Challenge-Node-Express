const express = require("express");

// setup express router
const router = express.Router();

// import the actions model
const actions = require("../data/helpers/actionModel");

// export router
module.exports = router;
