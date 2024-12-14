import mongoose from "mongoose";

const letterSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true } // createdAt, updatedAt
);

const Letter = mongoose.model("Letter", letterSchema);

export default Letter;
