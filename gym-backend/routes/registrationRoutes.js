import express from "express";

import {
  createRegistration,
  getRegistrations,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", createRegistration);

router.get("/", getRegistrations);

export default router;