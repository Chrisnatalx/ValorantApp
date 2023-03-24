import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Navbar } from "../menu/Navbar";
import { ValorantLogo } from "../logo/ValorantLogo";
import { Video } from "../Video";
import { Footer } from "../footer/Footer";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

export const HomeLarge = () => {
    return (
        <>
            <Navbar />
            <Box pt='80px' position='relative' w='100%' h='100%' fontFamily="FF Mark W05,Arial,sans-serif" >
                <Video />
                <Flex direction='column' position='absolute' top='200px' width='100vw' alignItems='center' >
                    <ValorantLogo width={'50%'} />
                    <Text color='whiteAlpha.900'>A 5v5 character-based tactical shooter</Text>
                    <Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }} mt={10}>
                        <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>PLAY FREE</Button>
                    </Link>
                </Flex>
            </Box>
            {/* <Box bg='#FFF8E8' mt={4} position='relative' fontFamily="FF Mark W05,Arial,sans-serif">
                <video
                    preload='true'
                    muted
                    loop
                    playsInline={true}
                    autoPlay={true}
                    src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4" type="video/mp4" />
                <Flex direction='column' position='absolute' top='10px' width='100vw' alignItems='center' >
                    <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>Gameplay</Button>
                </Flex>
            </Box> */}
            <Footer></Footer>
        </>
    )
}
