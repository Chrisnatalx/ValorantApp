import React, { useEffect, useState, useMemo } from "react";
import { Navbar } from "../components/menu/Navbar";
import { useFetch } from "../hooks/useFetch";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { AgentCard } from "../components/cards/agentcard/AgentCard";
import { Footer } from "../components/footer/Footer";
import { useTranslation } from "react-i18next";

const LANGUAGE = {
	"en": 'en-US',
	"es": 'es-ES'
}

const URL_BASE = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

const getUrl = (language) =>
	`${URL_BASE}&language=${language}`

export const AgentsView = () => {
	const [t, i18n] = useTranslation("global")
	const [url, setUrl] = useState(URL_BASE)

	const { data } = useFetch(url)

	useEffect(() => {
		const language = LANGUAGE[i18n.language] || LANGUAGE.en
		const newUrl = getUrl(language)
		setUrl(newUrl)
	}, [i18n.language])


	return (
		<>
			<Navbar />
			<Box pt="80px" fontFamily="FF Mark W05,Arial,sans-serif" bg='#0f1923'>
				{
					data ?
						<Center>
							<AgentCard data={data.data}></AgentCard>
						</Center>
						:
						<Center>
							<Spinner color='red.500' size='xl' />
						</Center>
				}

			</Box>
			<Footer />
		</>
	);
};