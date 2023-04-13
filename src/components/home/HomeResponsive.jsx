import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { ValorantLogo } from '../logo/ValorantLogo'
import { Navbar } from '../menu/Navbar'

import { useTranslation } from 'react-i18next';

export const HomeResponsive = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <Navbar />
            <Flex id='fruta' direction='column' w='100%' >

                <Box pt='80px' position='relative' w='100%' h='100%' fontFamily="FF Mark W05,Arial,sans-serif" >
                    <Image src='https://i.redd.it/zyipc46j76r41.gif' w='100%' h='400px' />
                    <Flex direction='column' position='absolute' top='100px' width='100vw' alignItems='center' >
                        <ValorantLogo width={'30%'} />
                        <Text color='black.900' size='sm'>{t("menu.description")}</Text>
                        <Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }} mt={7}>
                            <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='150px' h='40px'>{t("menu.play_free")}</Button>
                        </Link>
                    </Flex>
                </Box>
                <Footer />
            </Flex>
        </>
    )
}
