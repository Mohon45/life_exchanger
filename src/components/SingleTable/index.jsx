"use client";

import { Icon } from "@iconify/react";
import React from "react";

const SingleTable = ({ tableName, tableData }) => {
	const tableHeader = tableData?.map((item) => item?.odd)[0];

	return (
		<div>
			<div className="bg-[#090F1F] flex justify-between items-center px-4 py-3">
				<div className="flex items-center">
					<Icon icon="humbleicons:star" fontSize={22} />
					<p className="ml-4 text-lg">{tableName ?? "Table Name Unavaialbe"}</p>
				</div>
				<Icon icon="oui:arrow-down" fontSize={30} />
			</div>
			<table className="w-full">
				<thead className="bg-[#253043]">
					<tr className="border-b-2 border-b-[#090F1F]">
						{tableHeader?.map((item, index) => (
							<th className="py-2" key={index}>
								{item?.name}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-[#323C50]">
					{tableData?.map((item, index) => (
						<tr key={index}>
							{item?.odd?.map((oddItem, i) => (
								<td className=" border-4 border-[#090F1F] text-center text-[#f7d066] py-2" key={i}>
									{oddItem?.value}
								</td>
							))}

							{/* <td className="border-4 border-[#090F1F] text-center text-[#f7d066] py-2">8.00</td>
						<td className="border-4 border-[#090F1F] text-center text-[#f7d066] py-2">2.22</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SingleTable;
