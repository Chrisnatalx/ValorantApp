import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/menu/Navbar";
import { Video } from "../components/Video";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {

	const { data } = useFetch('https://valorant-api.com/v1/gamemodes')



	return (
		<>
			<Navbar />
			<Box pt='60px'>
				<Center>
					<Video />

				</Center>
			</Box>
		</>
	);
};
