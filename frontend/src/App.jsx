import React from "react";
import IndexPage from "./pages/IndexPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => (
	<div className="font-baligo flex flex-col min-h-screen px-5 lg:px-20 py-5 justify-center gap-[60px] ">
		<Routes>
			<Route path="/" element={<IndexPage />}></Route>
			<Route path="/create" element={<CreatePage />}></Route>
		</Routes>
	</div>
);

export default App;
