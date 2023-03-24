import { useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HomeLarge } from "../components/home/HomeLarge";
import { HomeResponsive } from "../components/home/HomeResponsive";


export const Home = () => {

	const [isLargerThan800] = useMediaQuery('(min-width: 700px)')
	useEffect(() => {
		if (!isLargerThan800) return
	}, [isLargerThan800])

	return (
		<>
			{isLargerThan800 ? <HomeLarge /> : <HomeResponsive />}
		</>
	);
};
