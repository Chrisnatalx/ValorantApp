import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { RiotLogo } from "../logo/RiotLogo";
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { TbWorld } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';

export const MenuResponsive = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (
        <Box fontFamily="FF Mark W05,Arial,sans-serif"

            position="fixed"
            zIndex="1001"
            w="100%"
            bg="#111">
            <Flex
                minWidth="max-content"
                alignItems="center"
                justifyContent="space-around"
                gap="2">
                <Menu >
                    <ButtonGroup display="flex" justifyContent="flex-start" gap={8}>
                        <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
                            <RiotLogo className="LogoRiot" />
                        </Link>
                        <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
                            <Logo className="Logo" />
                        </Link>
                    </ButtonGroup>
                    <ButtonGroup display="flex" justifyContent="flex-end" alignItems='center' gap={8}>
                        <IconButton
                            size="sm"
                            color='#f9f9f9'
                            _hover={{ bg: '#424242' }}
                            variant='ghost'>
                            <TbWorld />
                        </IconButton>
                        <IconButton size="sm"
                            color='#f9f9f9'
                            _hover={{ bg: '#424242' }}
                            variant='ghost'
                            onClick={onOpen}>
                            <GiHamburgerMenu />
                        </IconButton>
                    </ButtonGroup>

                    <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='xs'>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton color='#f9f9f9'
                                _hover={{ bg: '#424242' }}
                                variant='ghost' />
                            <DrawerBody bg='#111'>
                                <ButtonGroup display='flex' flexDirection='column' w='100%' gap={8} alignItems='flex-start'>
                                    <Link
                                        as={RouterLink}
                                        to="/Agents"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            className="MenuButton"
                                            variant="link"
                                            color="#f9f9f9"
                                            size="sm"
                                            _hover={{ textDecoration: "underline solid #FF5A5A 2px" }}
                                        >
                                            AGENTS
                                        </Button>
                                    </Link>
                                    <Link
                                        as={RouterLink}
                                        to="/Maps"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            className="MenuButton"
                                            variant="link"
                                            color="#f9f9f9"
                                            size="sm"
                                            _hover={{ textDecoration: "underline solid #ff4655 2px" }}
                                        >
                                            MAPS
                                        </Button>
                                    </Link>
                                    <Link
                                        as={RouterLink}
                                        to="/Weapons"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            className="MenuButton"
                                            variant="link"
                                            color="#f9f9f9"
                                            size="sm"
                                            _hover={{ textDecoration: "underline solid #ff4655 2px" }}
                                        >
                                            WEAPONS
                                        </Button>
                                    </Link>
                                    <MenuButton as={Button} variant="link"
                                        _hover={{ textDecoration: "underline solid #ff4655 2px" }}
                                        _expanded={{ textDecoration: "underline solid #ff4655 2px", transform: 'scale(1.25,1.25)' }}
                                        color="#f9f9f9"
                                        size="sm" rightIcon={<ChevronDownIcon />}
                                        _active={{ color: '#f9f9f9' }}>
                                        OUR SOCIALS
                                    </MenuButton>
                                    <MenuList bg='#1f1f1f' borderColor='#1f1f1f' justifyContent='center' >
                                        <Link as={RouterLink} to='https://twitter.com/playvalorant' style={{ textDecoration: 'none' }}>
                                            <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                                Twitter
                                            </MenuItem>
                                        </Link>
                                        <Link as={RouterLink} to='https://www.instagram.com/playvalorantofficial/' style={{ textDecoration: 'none' }}
                                        >
                                            <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                                Instagram
                                            </MenuItem>
                                        </Link>
                                        <Link as={RouterLink} to='https://www.facebook.com/PlayVALORANT/' style={{ textDecoration: 'none' }}
                                        >
                                            <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                                Facebook
                                            </MenuItem>
                                        </Link>
                                        <Link as={RouterLink} to='https://www.youtube.com/PlayValorant' style={{ textDecoration: 'none' }}
                                        >
                                            <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                                Youtube
                                            </MenuItem>
                                        </Link>
                                        <Link as={RouterLink} to='https://discord.com/invite/valorant' style={{ textDecoration: 'none' }}>
                                            <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                                Discord
                                            </MenuItem>
                                        </Link>
                                    </MenuList>
                                    <Link as={RouterLink} to='https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=2nBlSKqP0TIhkVNc185OGXrw22wjIViDZm-vjJanyJE&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=f55fc23bc2e96e6991914241d6&uri=https%3A%2F%2Fplayvalorant.com%2Fen-us%2F' style={{ textDecoration: 'none' }}>
                                        <Button size="sm" _hover={{ bg: '#ff4655' }} colorScheme='red' color='#111'>PLAY NOW</Button>
                                    </Link>
                                </ButtonGroup>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Menu>
            </Flex>

        </Box>
    )
}
