import React from "react";
import { Link as RouterLink } from "react-router-dom"
import { Navbar } from "../components/menu/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Video } from "../components/Video";
import { Box, Button, Center, Container, Link, Text } from "@chakra-ui/react";


export const Home = () => {



	return (
		<>
			<Navbar />
			<Box pt='80px' position='relative' overflowX='hidden' w='100%' fontFamily="FF Mark W05,Arial,sans-serif" minHeight='800px' >
				<Video h='100%' />
				<Container position='absolute' top='30%' left='35%' p={0} >
					<Center flexDirection='column' >
						<Text color='whiteAlpha.900'>A 5v5 character-based tactical shooter</Text>
						<Sidebar />
					</Center>
				</Container>
				<Center position='absolute' top='55%' left='42%' p={0}>
					<Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }}>
						<Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='300px' h='60px'>PLAY FREE</Button>
					</Link>
				</Center>

			</Box>
		</>
	);
};
