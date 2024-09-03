"use client";

import GameDetails from "@/components/GameDetails";
import SingleTable from "@/components/SingleTable";
import Timer from "@/components/Timer";
import ddd from "@/assets/ww.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [allGames, setAllGames] = useState([]);
	const [selectedGame, setSelectedGame] = useState({});
	const [searchValue, setSearchValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		fetch("./game.json")
			.then((res) => res.json())
			.then((response) => {
				setAllGames(response?.data);
				setSelectedGame(response?.data?.[0]);
			});
	}, []);

	const searchHandler = (e) => {
		const value = e.target.value;
		setSearchValue(value);

		if (value) {
			const searchResult = allGames?.filter((item) => item.id.toLowerCase().includes(value.toLowerCase()));
			console.log(searchResult);
			setSuggestions(searchResult);
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (game) => {
		if (Array.isArray(game?.matches?.match)) {
			const customData = {
				gid: game.gid,
				id: game.id,
				name: game.name,

				matches: {
					match: game?.matches?.match?.[0],
				},
			};
			setSelectedGame(customData);
		} else {
			setSelectedGame(game);
		}
		setSearchValue("");
		setSuggestions([]);
	};

	return (
		<main className="py-8">
			<div className="w-[400px] mx-auto">
				<input
					type="text"
					name=""
					value={searchValue}
					placeholder="search game by id"
					className="bg-transparent outline outline-1 w-full rounded-[5px] py-2 px-4 focus:outline-white"
					onChange={searchHandler}
				/>
				{suggestions.length > 0 ? (
					<div className="absolute w-[400px] mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
						{suggestions.map((game, index) => (
							<div
								key={game.id}
								className="p-2 cursor-pointer hover:bg-gray-100 text-black border-b-2"
								onClick={() => handleSuggestionClick(game)}
							>
								{index + 1}. {game?.name}
							</div>
						))}
					</div>
				) : searchValue === "" ? null : (
					<div className="absolute w-[400px] mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
						<p className="text-black text-center py-2">No Game Avaialble</p>
					</div>
				)}
			</div>
			<Timer />
			<GameDetails data={selectedGame} />
			<div>
				{selectedGame?.matches?.match?.odds?.type?.map((item, index) => {
					if (Array.isArray(item?.bookmaker)) {
						return <SingleTable tableName={item?.value} tableData={item?.bookmaker} />;
					}
				})}
			</div>

			{/* <Image src={ddd} /> */}
		</main>
	);
}
