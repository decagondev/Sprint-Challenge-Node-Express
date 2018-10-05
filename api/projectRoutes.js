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

// get project endpoint (based upon project id)
router.get("/:id", async (req, res) => {
  try {
    const project = await projects.get(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "project could not be retrieved" });
  }
});

// get actions of a specific project (based upon project id)
router.get("/:id/actions", async (req, res) => {
  try {
    const actions = await projects.getProjectActions(req.params.id);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ message: "actions could not be retrieved" });
  }
});

// export router
module.exports = router;
