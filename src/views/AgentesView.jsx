import React from "react";
import { Navbar } from "../components/menu/Navbar";
import { useFetch } from "../hooks/useFetch";
import { Box, Center, Text } from "@chakra-ui/react";
import { AgentCard } from "../components/cards/agentcard/AgentCard";

export const AgentesView = () => {
	const { data, loading } = useFetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="FF Mark W05,Arial,sans-serif" bg='#0f1923'>
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
