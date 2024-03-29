import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, ButtonGroup, Center, IconButton, Link, Text } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <Box bg='#111' color='#f9f9f9' h='200px' display='flex' justifyContent='center'>
                <Center flexDirection='column'>
                    <Text mb={4} >{t("footer.description")}</Text>
                    <ButtonGroup >
                        <Link as={RouterLink} to='https://github.com/Chrisnatalx' m={3}>
                            <IconButton icon={<BsGithub />} color='#111' _hover={{ transform: 'scale(1.25,1.25)', bg: "#7e7e7e" }} />
                        </Link>
                        <Link as={RouterLink} to='https://www.linkedin.com/in/christian-natale-4b54581b8/' m={3} >
                            <IconButton icon={<BsLinkedin />} color='#111' _hover={{ transform: 'scale(1.25,1.25)', bg: "#7e7e7e" }} />
                        </Link>
                        <Link as={RouterLink} to='mailto:natale.christian.a@gmail.com' m={3}>
                            <IconButton icon={<SiGmail />} color='#111' _hover={{ transform: 'scale(1.25,1.25)', bg: "#7e7e7e" }} />
                        </Link>

                    </ButtonGroup>
                </Center>
            </Box>
        </>
    )
}
