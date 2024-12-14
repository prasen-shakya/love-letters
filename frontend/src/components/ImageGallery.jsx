import React, { useState } from "react";

const ImageGallery = () => {
	const [visible, setVisible] = useState(true);
	return (
		<div className="relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] mt-10 mb-10 ">
			<div className="absolute drop-shadow-xl inset-0 w-full rounded-full bg-[length:400px] bg-center bg-[url('./images/flowers.jpg')] bg-no-repeat border-[7px] border-[#e47070]"></div>
			{visible && (
				<div
					onClick={(e) => {
						e.preventDefault();
						e.target.className += " rotate-[110deg] opacity-0";
						setTimeout(() => setVisible(false), 150);
					}}
					className="absolute origin-bottom inset-0 rounded-full bg-[length:400px] bg-center bg-[url('./images/kathryn1.jpg')] bg-no-repeat border-[7px] border-[#e47070] transition-all hover:cursor-pointer"
				></div>
			)}
		</div>
	);
};

export default ImageGallery;
