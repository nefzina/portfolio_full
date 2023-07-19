const express = require("express");

const router = express.Router();

const projectsControllers = require("./controllers/projectsControllers");
const toolsControllers = require("./controllers/toolsControllers");

router.get("/projects", projectsControllers.browse);
router.get("/projects/:id", projectsControllers.read);
router.put("/projects/:id", projectsControllers.edit);
router.post("/projects", projectsControllers.add);
router.delete("/projects/:id", projectsControllers.destroy);

router.get("/tools", toolsControllers.browse);
router.put("/tools/:id", toolsControllers.edit);
router.post("/tools", toolsControllers.add);
router.delete("/tools/:id", toolsControllers.destroy);
module.exports = router;
