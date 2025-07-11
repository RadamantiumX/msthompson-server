import { Router } from "express";
import { InformesController } from "./controller.js";

const informesRouter = Router()

informesRouter.post('/informes', InformesController.save)
informesRouter.get('/informes', InformesController.list)

export default informesRouter