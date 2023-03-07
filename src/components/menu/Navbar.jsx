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

export const Navbar = () => {
	return (
		<>
			<Box
				fontFamily="Inter"
				position="fixed"
				zIndex="1001"
				w="100%"
				bg="#0C0B0B"
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
									color="#FFFFFF"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									Agents
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
									color="#FFFFFF"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									Maps
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
									color="#FFFFFF"
									size="sm"
									_hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
								>
									Weapons
								</Button>
							</Link>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
