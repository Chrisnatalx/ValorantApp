import React, { useEffect } from "react";
import "./Navbar.css";
import { useMediaQuery } from "@chakra-ui/react";
import { MenuLarge } from "./MenuLarge";
import { MenuResponsive } from "./MenuResponsive";

export const Navbar = () => {

	const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)');

	useEffect(() => {
		if (!isLargerThan1050) return;
	}, [isLargerThan1050]);

	return (
		<>
			{isLargerThan1050 ? <MenuLarge /> : <MenuResponsive />}
		</>
	);
};
