import React from "react";
import { useState } from "react";

const CreatePage = () => {
	const [message, setMessage] = useState("");

	const handleAddMessage = async (e) => {
		if (!message) return;

		setMessage("");

		try {
			const response = await fetch("http://localhost:5000/api/letters", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="flex justify-center items-center h-screen text-xl">
			<form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
				<h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
					Write a Message
				</h2>
				<div className="mb-4 ">
					<textarea
						name="message"
						placeholder="Write your message..."
						className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						value={message.message}
						onChange={(e) => setMessage(e.target.value)}
						rows="6"
					/>
				</div>
				<div className="flex items-center justify-center">
					<button
						onClick={handleAddMessage}
						className="bg-[#3a57f8] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 "
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePage;
