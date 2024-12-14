import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import letterRoutes from "./routes/letter.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);
app.use("/api/letters", letterRoutes);

app.listen(PORT, () => {
	connectDB();
	console.log("Server started on http://localhost:" + PORT);
});
