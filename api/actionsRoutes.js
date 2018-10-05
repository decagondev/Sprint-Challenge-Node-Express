const express = require("express");

// setup express router
const router = express.Router();

// import the actions model
const actions = require("../data/helpers/actionModel");
const projects = require("../data/helpers/projectModel");
// get actions endpoint
router.get("/", async (req, res) => {
  try {
    const project_id = req.params.id;
    const allActions = await actions.get();
    res.status(200).json(allActions);
  } catch (error) {
    res.status(500).json({ message: "actions could not be retrieved" });
  }
});

// get action endpoint
router.get("/:id", async (req, res) => {
  try {
    const action = await actions.get(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ message: "action could not be retrieved" });
  }
});

// post action endpoint (create a new action)
router.post("/", async (req, res) => {
  try {
    // no project check
    if (!req.body.project_id) {
      return res.status(400).json({ message: "enter a project ID" });
    }

    // no description check
    if (!req.body.description) {
      return res.status(400).json({ message: "enter a description" });
    }

    // no notes check
    if (!req.body.notes) {
      return res.status(400).json({ message: "enter some notes" });
    }

    // description length check
    if (req.body.description.length > 128) {
      return res
        .status(400)
        .json({ message: "description must be less than 128 characters" });
    }

    // project id exists check
    const proj_id = req.body.project_id;
    const proj = await projects.get(proj_id).catch(error => {
      console.log(error);
      return res.status(500).json({
        message: `project with an id of ${proj_id} does not exist in database`
      });
    });
    const newAction = await actions.insert(req.body);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ message: "action could not be saved" });
  }
});

// put action endpoint (edit an action with a given id)
router.put("/:id", async (req, res) => {
  try {
    // no project check
    if (!req.body.project_id) {
      return res.status(400).json({ message: "enter a project ID" });
    }

    // no description check
    if (!req.body.description) {
      return res.status(400).json({ message: "enter a description" });
    }

    // no notes check
    if (!req.body.notes) {
      return res
        .status(400)
        .json({ message: "add at least an empty string for notes" });
    }

    // description length check
    if (req.body.description.length > 128) {
      return res
        .status(400)
        .json({ message: "description must be less than 128 characters" });
    }
    const editedAction = await actions.insert(req.body);
    res.status(200).json(editedAction);
  } catch (error) {
    res.status(500).json({ message: "action could not be edited" });
  }
});

// delete action endpoint (delete an action at given id)
router.delete("/:id", async (req, res) => {
  try {
    const action = await actions.remove(req.params.id);
    // action exists check
    if (action === 0) {
      res.status(404).json({ message: "action does not exist" });
      return;
    }
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ message: "action could not be deleted" });
  }
});

// export router
module.exports = router;
