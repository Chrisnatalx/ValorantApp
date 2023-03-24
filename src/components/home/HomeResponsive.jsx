import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { ValorantLogo } from '../logo/ValorantLogo'
import { Navbar } from '../menu/Navbar'
import { Video } from '../Video'

export const HomeResponsive = () => {
    return (
        <>
            <Navbar />
            <Box pt='80px' position='relative' w='100%' h='100%' fontFamily="FF Mark W05,Arial,sans-serif" >
                <Video objectFit='cover' />
                <Flex direction='column' position='absolute' top='100px' width='100vw' alignItems='center' >
                    <ValorantLogo width={'30%'} />
                    <Text color='whiteAlpha.900' size='sm'>A 5v5 character-based tactical shooter</Text>
                    <Link as={RouterLink} to='https://playvalorant.com/en-us/download/' style={{ textDecoration: "none" }} mt={7}>
                        <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>PLAY FREE</Button>
                    </Link>
                </Flex>
            </Box>
            <Box bg='#FFF8E8' mt={2} position='relative' fontFamily="FF Mark W05,Arial,sans-serif">
                <video
                    preload='true'
                    muted
                    loop
                    playsInline={true}
                    autoPlay={true}
                    src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4" type="video/mp4" />
                <Flex direction='column' position='absolute' top='25px' width='100vw' alignItems='center' >
                    <Link as={RouterLink} to='https://www.youtube.com/PlayValorant' style={{ textDecoration: "none" }} mt={7}>
                        <Button colorScheme='red' color='#ece8e1' _hover={{ bg: '#0f1923' }} w='200px' h='40px'>Gameplay</Button>
                    </Link>
                </Flex>
            </Box>

            <Footer></Footer>

        </>
    )
}
