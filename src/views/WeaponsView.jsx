import React from "react";
import { Navbar } from "../components/menu/Navbar";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { WeaponsCard } from "../components/cards/weaponcard/WeaponsCard";
import { Footer } from "../components/footer/Footer";


export const WeaponsView = () => {
	const { data, loading } = useFetch('https://valorant-api.com/v1/weapons')
	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="FF Mark W05,Arial,sans-serif" bg='#0f1923'>
				{
					data
						?
						<WeaponsCard data={data.data}></WeaponsCard>

						:
						<Center>
							<Spinner color='red.500' size='xl' />
						</Center>
				}
			</Box>
			<Footer />
		</>
	);
};
