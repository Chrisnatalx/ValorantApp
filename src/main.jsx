import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next'
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'


i18next
	.use(ChainedBackend)
	.init({
		interpolation: { escapeValue: false },  // React already does escaping
		lng: 'en',                              // language to use
		resources: {
			en: {
				global: global_en
			},
			es: {
				global: global_es
			}

		}, backend: {
			backends: [
				LocalStorageBackend,
				HttpBackend
			],
			backendOptions: [{
				expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
			}, {
				loadPath: '/locales/{{lng}}/{{ns}}.json'
			}]
		}
	});
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<ChakraProvider>
					<AppRouter />
				</ChakraProvider>
			</BrowserRouter>

		</I18nextProvider>


	</React.StrictMode>
);
