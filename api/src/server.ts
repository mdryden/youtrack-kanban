import * as Router from "koa-router";
import IndexController from "./controllers/index.controller";

const router = new Router();

router.get("/", IndexController.getIndex);
router.get("/backlog", IndexController.getBackLog);

export default router;
