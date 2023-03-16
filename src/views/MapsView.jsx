import React, { useEffect, useState } from "react";
import { Navbar } from "../components/menu/Navbar";
import { Box, Center, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { MapCard } from "../components/cards/mapscard/MapCard";
import { MapsCard2 } from "../components/cards/mapscard/MapsCard2";

export const MapsView = () => {
	const [data, setdata] = useState(null)
	const [id, setId] = useState('d960549e-485c-e861-8d71-aa9d1aed12a2')
	const URL = `https://valorant-api.com/v1/maps/${id}`

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setdata(data);
			});
	}, [URL])

	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="FF Mark W05,Arial,sans-serif" bg='#0f1923'>
				{
					data ?
						<Center>
							<MapsCard2 data={data.data} setId={setId} setdata={setdata} ></MapsCard2>
						</Center>
						: <Text>Loading</Text>
				}
			</Box>
		</>
	);
};
