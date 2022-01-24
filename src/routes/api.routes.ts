import { Router } from "express";
import { shortenUrl } from "../middleware/routes.middleware";

const apiRoutes = Router();

apiRoutes.post("/shorten", shortenUrl);

// apiRoutes.get("/:_id", redirect);

export default apiRoutes;
