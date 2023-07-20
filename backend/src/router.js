const express = require("express");

const router = express.Router();

const projectsControllers = require("./controllers/projectsControllers");
const toolsControllers = require("./controllers/toolsControllers");
const toolsProjectControllers = require("./controllers/toolsProjectControllers");

router.get("/projects", projectsControllers.browse);
router.get("/projects/:id", projectsControllers.read);
router.put("/projects/:id", projectsControllers.edit);
router.post("/projects", projectsControllers.add);
router.delete("/projects/:id", projectsControllers.destroy);

router.get("/tools", toolsControllers.browse);
router.get("/tools/:id", toolsControllers.read);
router.put("/tools/:id", toolsControllers.edit);
router.post("/tools", toolsControllers.add);
router.delete("/tools/:id", toolsControllers.destroy);

router.post("/toolsProject", toolsProjectControllers.add);
router.delete("/toolsProjectByTool/:id", toolsProjectControllers.destroyByTool);
router.delete(
  "/toolsProjectByProject/:id",
  toolsProjectControllers.destroyByProject
);

module.exports = router;
