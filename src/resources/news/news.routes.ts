import * as express from "express";

import { validator } from "@middlewares";

import { saveNews, getNews, deleteNews, updateNews } from "./controller";

const routes = express.Router();

import saveNewsSchema from "./schemas/saveNews.schema";

routes.post("/news", validator(saveNewsSchema), saveNews);
routes.get("/news", validator(saveNewsSchema), getNews);
routes.delete("/news", validator(saveNewsSchema), deleteNews);
routes.put("/news", validator(saveNewsSchema), updateNews);

export default routes;
