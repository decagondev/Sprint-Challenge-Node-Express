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

// post project endpoint (create a new project)
router.post("/", async (req, res) => {
  try {
    // no name check
    if (!req.body.name) {
      return res.status(400).json({ message: "enter a name" });
    }

    // no description check
    if (!req.body.description) {
      return res.status(400).json({ message: "enter a description" });
    }

    // name length check
    if (req.body.name.length > 128) {
      return res
        .status(400)
        .json({ message: "name must be less than 128 characters" });
    }
    const newProject = await projects.insert(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "project could not be saved" });
  }
});

// put project endpoint (edit specific project based upon project id)
router.put("/:id", async (req, res) => {
  try {
    // no name check
    if (!req.body.name) {
      return res.status(400).json({ message: "enter a name" });
    }

    // no description check
    if (!req.body.description) {
      return res.status(400).json({ message: "enter a description" });
    }

    // name length check
    if (req.body.name.length > 128) {
      return res
        .status(400)
        .json({ message: "name must be less than 128 characters" });
    }
    const project = await projects.update(req.params.id, req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "project could not be saved" });
  }
});

// export router
module.exports = router;
