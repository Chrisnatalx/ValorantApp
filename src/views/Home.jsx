import React from "react";
import { Link as RouterLink } from "react-router-dom"
import { Navbar } from "../components/menu/Navbar";
import { ValorantLogo } from "../components/logo/ValorantLogo";
import { Video } from "../components/Video";
import { Box, Button, Center, Container, Flex, Link, Text } from "@chakra-ui/react";


export const Home = () => {



	return (
		<>
			<Navbar />
			<Box pt='80px' position='relative' overflowX='hidden' w='100%' fontFamily="FF Mark W05,Arial,sans-serif" minHeight='800px'>
				<Video h='100%' />
				<Flex direction='column' position='absolute' top='200px' width='100vw' alignItems='center' >
					<ValorantLogo width={'50%'} />
					<Text color='whiteAlpha.900'>A 5v5 character-based tactical shooter</Text>
					<Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }} mt={10}>
						<Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>PLAY FREE</Button>
					</Link>
				</Flex>
				{/* <Center position='absolute' top='55%' left='42%' p={0}>
					<Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }}>
						<Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='300px' h='60px'>PLAY FREE</Button>
					</Link>
				</Center> */}

			</Box>
		</>
	);
};
