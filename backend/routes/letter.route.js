import express from "express";
import {
	createLetter,
	deleteLetter,
	getLetters,
	updateLetter,
} from "../controllers/letter.controller.js";

const router = express.Router();

router.get("/", getLetters);
router.post("/", createLetter);
router.put("/:id", updateLetter);
router.delete("/:id", deleteLetter);

export default router;
