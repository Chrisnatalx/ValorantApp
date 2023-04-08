import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Navbar } from "../menu/Navbar";
import { ValorantLogo } from "../logo/ValorantLogo";
import { Video } from "../Video";
import { Footer } from "../footer/Footer";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

export const HomeLarge = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <Navbar />
            <Box pt='80px' position='relative' w='100%' fontFamily="FF Mark W05,Arial,sans-serif" >
                <Video />
                <Flex direction='column' position='absolute' top='200px' width='100vw' alignItems='center' >
                    <ValorantLogo width={'50%'} />
                    <Text color='whiteAlpha.900'>{t("menu.description")}</Text>
                    <Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }} mt={10}>
                        <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>{t("menu.play_free")}</Button>
                    </Link>
                </Flex>
            </Box>

            <Footer></Footer>
        </>
    )
}
