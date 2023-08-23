import * as express from "express";

import NewsService from "resources/news/services/NewsService";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { type } = req.body;

    const newsService = new NewsService();

    const result = newsService.saveNews();

    return res.apiResponse(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
