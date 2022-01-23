import { NextFunction, Request, Response, Router } from "express";
import IUrlShortener from "../models/UrlShortener.model";
import MClient from "../database/MClient";
import { customAlphabet } from "nanoid";

import { ObjectId } from "mongodb";

const apiRoutes = Router();

const nanoid = customAlphabet("1234567890abcdef", 12);

apiRoutes.post(
  "/shorten",
  async (
    req: Request<any, IUrlShortener, IUrlShortener>,
    res: Response,
    _next: NextFunction
  ) => {
    try {
      const collection = await (await MClient).db().createCollection("urls");

      collection.insertOne({
        _id: new ObjectId(nanoid()),
        shortenedUrl: `${document.location.origin}/${req.body._id}`,
        url: req.body.url,
      });
      res.status(201).json({ shortenedUrl: req.body.shortenedUrl });
    } catch (err: any) {
      console.error(err);
    }
  }
);

apiRoutes.get("/:");
export default apiRoutes;
