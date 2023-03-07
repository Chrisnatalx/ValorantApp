import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/menu/Navbar";

export const AgentesView = () => {
	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="Open Sans">
				<Center>
					<Text>Agents</Text>
				</Center>
			</Box>
		</>
	);
};
