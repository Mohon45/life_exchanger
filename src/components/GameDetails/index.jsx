import React from "react";
import dummyText from "@/assets/fff.png";
import Image from "next/image";

const GameDetails = ({ data }) => {
	return (
		<div className="w-[50%] mx-auto  flex justify-center">
			<div className="flex items-center">
				<p>{data?.name?.split(":")[0]} (0/0)</p>
				<Image src={dummyText} className="w-[50px] h-[50px] ml-3" />
			</div>
			<div className="mx-8">
				<p className="text-center text-lg">{data?.matches?.match?.time}</p>
				<h3 className="text-4xl font-semibold mt-2">
					{data?.matches?.match?.date?.split(".")[0]}/{data?.matches?.match?.date?.split(".")[1]}
				</h3>
			</div>
			<div className="flex items-center">
				<Image src={dummyText} className="w-[50px] h-[50px] mr-3" />
				<p>{data?.name?.split(":")[1]} (0/0)</p>
			</div>
		</div>
	);
};

export default GameDetails;
