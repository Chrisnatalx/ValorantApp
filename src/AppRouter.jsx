import React from "react";
import { Route, Routes } from "react-router-dom";
import { AgentsView } from "./views/AgentsView";
import { Home } from "./views/Home";
import { MapsView } from "./views/MapsView";
import { WeaponsView } from "./views/WeaponsView";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Agents" element={<AgentsView />} />
				<Route path="/Maps" element={<MapsView />} />
				<Route path="/Weapons" element={<WeaponsView />} />
			</Routes>
		</>
	);
};
