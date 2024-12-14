import ImageGallery from "../components/ImageGallery.jsx";
import { useEffect, useState } from "react";

const IndexPage = () => {
	const [letters, setLetters] = useState(null);
	const [currentLetter, setCurrentLetter] = useState(0);
	// Fetch data from the backend
	useEffect(() => {
		const fetchLetters = async () => {
			try {
				const response = await fetch("/api/letters");
				if (!response.ok) {
					throw new Error("Failed to fetch data from the server");
				}
				const data = await response.json();

				console.log(data);
				if (data.data.length == 0) {
					throw new Error("No data received from the server");
				}

				setLetters(data.data);
			} catch (e) {
				setLetters([
					{
						message: "Hey uh, the server is down right now :(",
					},
				]);
			}
		};
		fetchLetters();
	}, []);

	return (
		<>
			<div className="flex flex-col  items-center justify-center text-center">
				<h1 className="font-bold font-playwright text-4xl lg:text-5xl">
					Love Letters For Kathryn
				</h1>
				<ImageGallery />
				<h2 className="text-3xl lg:text-5xl">Happy Six Months!</h2>
				<p className="text-xl lg:text-3xl">
					Everyday I am going to update this website so that I have
					some more notes for you! :)
				</p>
			</div>
			<div className="flex flex-col items-center minh-[120px] lg:minh-[200px] justify-center">
				<div className="w-full lg:w-1/2">
					<div className="shadow-md bg-white rounded-lg w-full justify-center items-center p-4 text-2xl lg:text-3xl">
						<p className="font-playwright text-base">To Kathryn</p>
						<hr className="mb-3" />
						{letters && <p>{letters[currentLetter].message}</p>}
					</div>
					<div className="flex mt-3 lg:mt-4 justify-between w-full drop-shadow-md ">
						<button
							onClick={() =>
								setCurrentLetter(Math.max(0, currentLetter - 1))
							}
						>
							<img
								className="h-[70px] lg:h-[80px] transition active:scale-95"
								src="./backward_arrow.png"
								alt="Backward Arrow"
							/>
						</button>
						<button
							onClick={() =>
								setCurrentLetter(
									Math.min(
										letters.length - 1,
										currentLetter + 1
									)
								)
							}
						>
							<img
								className="h-[70px] lg:h-[80px] transition active:scale-95"
								src="./forward_arrow.png"
								alt="Forward Arrow"
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default IndexPage;
