import React from "react";
import { Navbar } from "../components/menu/Navbar";
import { Box, Center, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";

export const MapsView = () => {
	const { data, loading } = useFetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="FF Mark W05,Arial,sans-serif" bg='#0f1923'>
				<Center>
					<Text>Maps</Text>
				</Center>
			</Box>
		</>
	);
};
