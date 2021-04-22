import {request, Router} from "express"
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessageController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessageController();

routes.post("/settings", settingsController.create);

routes.post("/Users", usersController.create);

routes.post("/Messages", messagesController.create);

routes.get("/Messages/:id", messagesController.showByUser);
export {routes};