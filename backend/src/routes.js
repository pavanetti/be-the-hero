const express = require("express");

const OngsController = require("./controllers/OngsController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionsController = require("./controllers/SessionsController");

const routes = express.Router();

routes.post("/sessions", SessionsController.create);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents", IncidentsController.delete);

module.exports = routes;
