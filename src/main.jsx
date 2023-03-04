import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
		<BrowserRouter>
			<ChakraProvider>
				<AppRouter />
			</ChakraProvider>
		</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
);
