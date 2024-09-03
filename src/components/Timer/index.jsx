"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 11116); // Set the timer duration (3 hours, 5 minutes, 16 seconds)

	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp: time,
		onExpire: () => console.warn("onExpire called"),
		autoStart: true, // Auto-start the timer
	});
	return (
		<div className="flex flex-col items-center justify-center my-6">
			<div className="flex text-6xl font-bold mb-2" style={{ fontFamily: "monospace" }}>
				<div className="flex flex-col items-center">
					<span style={{ minWidth: "2ch", textAlign: "center" }}>{String(hours).padStart(2, "0")}</span>
					<span className="text-sm font-normal mt-2">hours</span>
				</div>
				<span className="mx-4">:</span>
				<div className="flex flex-col items-center">
					<span style={{ minWidth: "2ch", textAlign: "center" }}>{String(minutes).padStart(2, "0")}</span>
					<span className="text-sm font-normal mt-2">minutes</span>
				</div>
				<span className="mx-4">:</span>
				<div className="flex flex-col items-center">
					<span style={{ minWidth: "2ch", textAlign: "center" }}>{String(seconds).padStart(2, "0")}</span>
					<span className="text-sm font-normal mt-2">seconds</span>
				</div>
			</div>
		</div>
	);
};

export default Timer;
