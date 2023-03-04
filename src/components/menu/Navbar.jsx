import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, ButtonGroup, Flex, Link, Menu } from "@chakra-ui/react";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
	return (
		<>
			<Box fontFamily="Inter" position="fixed" zIndex="1001" w="100%" bg='#0C0B0B'>
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup display="flex" justifyContent="space-around">
							<Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
								<Logo/>
							</Link>
						</ButtonGroup>
						<ButtonGroup display="flex" justifyContent="space-around">
							<Link
								as={RouterLink}
								to="/Agents"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost" color='#FFFFFF' size='sm'>Agents</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Maps"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost" color='#FFFFFF' size='sm'>Maps</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Weapons"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost" color='#FFFFFF' size='sm'>Weapons</Button>
							</Link>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
