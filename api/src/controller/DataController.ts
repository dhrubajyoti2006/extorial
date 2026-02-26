import { Router, Response } from "express";
import { DataService } from "../services/DataService";

export const dataRouter = Router();

dataRouter.get("/list", async (_req, res: Response) => {
  const response = await DataService.list();
  res.json(response);
});
