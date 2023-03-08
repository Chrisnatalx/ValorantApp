import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { AgentCard } from "../components/cards/AgentCard";
import { Navbar } from "../components/menu/Navbar";
import { useFetch } from "../hooks/useFetch";

export const AgentesView = () => {
	const { data, loading } = useFetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="Open Sans" bg='#0f1923'>
				{
					data ?
						<Center>
							<AgentCard data={data.data}></AgentCard>
						</Center>
						: <Text>{loading}</Text>
				}

			</Box>
		</>
	);
};
