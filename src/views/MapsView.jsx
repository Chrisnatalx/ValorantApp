import React from "react";
import { Navbar } from "../components/menu/Navbar";
import { Box, Center, Text } from "@chakra-ui/react";

export const MapsView = () => {
	return (
		<>
			<Navbar />
			<Box pt="60px" fontFamily="Open Sans">
				<Center>
					<Text>Maps</Text>
				</Center>
			</Box>
		</>
	);
};
