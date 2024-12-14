import Letter from "../models/letter.model.js";
import mongoose from "mongoose";

export const createLetter = async (req, res) => {
	const letter = req.body;

	if (!letter.message) {
		return res
			.status(400)
			.json({ success: false, message: "Message is required" });
	}

	const newLetter = new Letter(letter);

	try {
		await newLetter.save();
		res.status(201).json({ success: true, data: newLetter });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

export const updateLetter = async (req, res) => {
	const { id } = req.params;
	const letter = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid Letter Id" });
	}

	try {
		const updatedLetter = await Letter.findByIdAndUpdate(id, letter, {
			new: true,
		});
		return res.status(200).json({ success: true, data: updatedLetter });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

export const deleteLetter = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res
			.status(404)
			.json({ success: false, message: "Invalid Letter Id" });
	}

	try {
		await Letter.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Letter deleted" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Letter could deleted",
		});
	}
};

export const getLetters = async (req, res) => {
	try {
		const letters = await Letter.find({}).sort({ createdAt: 1 });
		res.json({ success: true, data: letters });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};
