const express = require("express");

// setup express router
const router = express.Router();

// import project model
const projects = require("../data/helpers/projectModel");

// get projects endpoint
router.get("/", async (req, res) => {
  try {
    const allProjects = await projects.get();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({ message: "projects could not be retrieved" });
  }
});
// export router
module.exports = router;
