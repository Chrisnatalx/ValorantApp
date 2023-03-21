import React from "react";
import { Context } from "../../../../RickyMortyWiki/RickAndMorty/src/context/Context";

export const ContextProvider = ({ children }) => {


	return <Context.Provider value={{

	}}>{children}</Context.Provider>;
};
