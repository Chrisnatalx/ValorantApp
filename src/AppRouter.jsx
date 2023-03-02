import React from "react";
import { Route, Routes } from "react-router-dom";
import { AgentesView } from "./views/AgentesView";
import { Home } from "./views/Home";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Agents" element={<AgentesView />} />
				<Route path="/Maps" element="" />
				<Route path="/Weapons" element="" />
			</Routes>
		</>
	);
};
