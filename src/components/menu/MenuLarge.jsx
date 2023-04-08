import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { RiotLogo } from "../logo/RiotLogo";
import "./Navbar.css";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { TbWorld } from 'react-icons/tb'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export const MenuLarge = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <>
            <Box
                fontFamily="FF Mark W05,Arial,sans-serif"
                height='80px'
                position="fixed"
                zIndex="1001"
                w="100%"
                bg="#111"
            >
                <Flex
                    minWidth="max-content"
                    alignItems="center"
                    justifyContent="space-around"
                    gap="2"
                >
                    <Menu>
                        <ButtonGroup display="flex" justifyContent="space-around" gap={8}>
                            <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
                                <RiotLogo className="LogoRiot" />
                            </Link>
                            <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
                                <Logo className="Logo" />
                            </Link>
                        </ButtonGroup>
                        <ButtonGroup display="flex" justifyContent="space-around" gap={8}>
                            <Link
                                as={RouterLink}
                                to="/Agents"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="link"
                                    color="#f9f9f9"
                                    size="sm"
                                    _hover={{ textDecoration: "underline solid #FF5A5A 2px", transform: 'scale(1.25,1.25)' }}
                                >
                                    {t("menu.agents")}
                                </Button>
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/Maps"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="link"
                                    color="#f9f9f9"
                                    size="sm"
                                    _hover={{ textDecoration: "underline solid #FF5A5A 2px", transform: 'scale(1.25,1.25)' }}
                                >
                                    {t("menu.maps")}
                                </Button>
                            </Link>
                            <Link
                                as={RouterLink}
                                to="/Weapons"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="link"
                                    color="#f9f9f9"
                                    size="sm"
                                    _hover={{ textDecoration: "underline solid #FF5A5A 2px", transform: 'scale(1.25,1.25)' }}
                                >
                                    {t("menu.weapons")}
                                </Button>
                            </Link>
                            <MenuButton as={Button}
                                style={{ marginInlineStart: '0px' }}
                                variant="link"
                                _hover={{ textDecoration: "underline solid #FF5A5A 2px", transform: 'scale(1.25,1.25)' }}
                                _expanded={{ textDecoration: "underline solid #FF5A5A 2px", transform: 'scale(1.25,1.25)' }}
                                color="#f9f9f9"
                                size="sm" rightIcon={<ChevronDownIcon />}
                                _active={{ color: '#f9f9f9' }}
                            >
                                {t("menu.our_social")}
                            </MenuButton>
                            <MenuList bg='#1f1f1f' borderColor='#1f1f1f'>
                                <Link as={RouterLink} to='https://twitter.com/playvalorant' style={{ textDecoration: 'none' }}>
                                    <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }} >
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
                                <Link as={RouterLink} to='https://discord.com/invite/valorant' style={{ textDecoration: 'none' }} >
                                    <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }}>
                                        Discord
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </ButtonGroup>
                    </Menu>
                    <Menu>
                        <ButtonGroup display="flex" justifyContent="flex-end" >
                            <MenuButton as={IconButton}
                                size="sm"
                                color='#f9f9f9'
                                _hover={{ bg: '#424242' }}
                                variant='ghost'
                                _active={{ color: '#f9f9f9' }}
                                icon={<TbWorld />}>

                            </MenuButton>
                            <MenuList bg='#1f1f1f' borderColor='#1f1f1f'>
                                <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }} onClick={() => i18n.changeLanguage("en")}>EN</MenuItem>
                                <MenuItem bg='#1f1f1f' color='#DBD9D9' _hover={{ bg: '#424242', color: '#f2f2f2' }} onClick={() => i18n.changeLanguage("es")}>ES</MenuItem>
                            </MenuList>
                            <Link as={RouterLink} to='https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=2nBlSKqP0TIhkVNc185OGXrw22wjIViDZm-vjJanyJE&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account&state=f55fc23bc2e96e6991914241d6&uri=https%3A%2F%2Fplayvalorant.com%2Fen-us%2F' style={{ textDecoration: 'none' }}>
                                <Button size="sm" _hover={{ bg: '#ff4655' }} colorScheme='red' color='#111'>{t("menu.play_now")}</Button>
                            </Link>
                        </ButtonGroup>
                    </Menu>
                </Flex>
            </Box>
        </>
    )
}
