import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, ButtonGroup, Flex, Link, Menu } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<>
			<Box fontFamily="Open Sans" position="fixed" zIndex="1001" w="100%">
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup display="flex" justifyContent="space-around">
							<Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
								<Button variant="ghost">Home</Button>
							</Link>
						</ButtonGroup>
						<ButtonGroup display="flex" justifyContent="space-around">
							<Link
								as={RouterLink}
								to="/Agents"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost">Agents</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Maps"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost">Maps</Button>
							</Link>
							<Link
								as={RouterLink}
								to="/Weapons"
								style={{ textDecoration: "none" }}
							>
								<Button variant="ghost">Weapons</Button>
							</Link>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
