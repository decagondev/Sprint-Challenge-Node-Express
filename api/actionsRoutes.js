const express = require("express");

// setup express router
const router = express.Router();

// import the actions model
const actions = require("../data/helpers/actionModel");

// get actions endpoint
router.get("/", async (req, res) => {
  try {
    const allActions = await actions.get();
    res.status(200).json(allActions);
  } catch (error) {
    res.status(500).json({ message: "actions could not be retrieved." });
  }
});

// export router
module.exports = router;
