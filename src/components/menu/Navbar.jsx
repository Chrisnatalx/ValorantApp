import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import "./Navbar.css";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Link,
	Menu,
} from "@chakra-ui/react";
import { TbWorld } from 'react-icons/tb'

export const Navbar = () => {
	return (
		<>
			<Box
				fontFamily="FF Mark W05,Arial,sans-serif"
				position="fixed"
				zIndex="1001"
				w="100%"
				bg="#111"
			>
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup display="flex" justifyContent="space-around">
							<Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
								<Logo className="Logo" />
							</Link>
						</ButtonGroup>
						<ButtonGroup display="flex" justifyContent="space-around" gap={8}>
							<Link
								as={RouterLink}
								to="/Agents"
								style={{ textDecoration: "none" }}
							>
								<Button
									className="MenuButton"
									variant="link"
									color="#f9f9f9"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									AGENTS
								</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Maps"
								style={{ textDecoration: "none" }}
							>
								<Button
									className="MenuButton"
									variant="link"
									color="#f9f9f9"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									MAPS
								</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Weapons"
								style={{ textDecoration: "none" }}
							>
								<Button
									className="MenuButton"
									variant="link"
									color="#f9f9f9"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									WEAPONS
								</Button>
							</Link>
						</ButtonGroup>
						<ButtonGroup display="flex" justifyContent="flex-end" gap={2}>
							<Button
								size="sm"
								color='#f9f9f9'
								_hover={{ bg: '#424242' }}
								variant='ghost'>
								<TbWorld />
							</Button>
							<Button size="sm" _hover={{ bg: '#FF5A5A' }} colorScheme='red.900'>PLAY NOW</Button>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
