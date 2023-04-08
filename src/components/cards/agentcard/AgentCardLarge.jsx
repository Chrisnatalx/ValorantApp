import React from 'react'
import { Box, Divider, Grid, GridItem, Heading, Image, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
export const AgentCardLarge = ({ agent }) => {

    const { displayName, fullPortrait, description, role, abilities } = agent
    const [t] = useTranslation("global")
    return (
        <>
            <Box pt='80px' bg='#FFF8E8' w='100%' >
                <Grid gridTemplateColumns='1fr 1fr 1fr'  >
                    <GridItem data-aos="fade-right" >
                        <Image src={fullPortrait} alt={displayName} _hover={{ transform: 'scale(1.25,1.3)' }} />
                    </GridItem>
                    <GridItem data-aos="fade-left"  >
                        <Box>
                            <Heading as='h2' size='3xl'>{displayName}</Heading>
                            <Divider pt='10px' mb='10px' />
                            <Heading as='h5' size='sm'> {t("agents.role")}: {role.displayName}</Heading>
                            <Text>{description}</Text>
                            <Divider pt='10px' mb='10px' />
                            <Heading as='h3' size='sm' mb='10px'> {t("agents.abilities")} :</Heading>
                        </Box>

                        <Box bg='#0f1923' display='flex' justifyContent='space-around' h='70px' alignItems='center' p={2}>
                            {abilities?.map((ability) => (
                                <Popover key={ability.slot}  >
                                    <PopoverTrigger >
                                        <Image
                                            src={ability.displayIcon}
                                            w='50px'
                                            h='50px'
                                            _hover={{ transform: 'scale(1.4,1.4)', bg: '#ff4655' }}
                                            _expanded={{ transform: 'scale(1.4,1.4)', bg: '#ff4655' }}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent bg='#0f1923' color='#ece8e1' fontSize='14px' p={2}  >
                                        <PopoverCloseButton _hover={{ bg: '#ff4655' }} />
                                        <PopoverBody>{ability.description}</PopoverBody>
                                    </PopoverContent>
                                </Popover>

                            ))}
                        </Box>
                    </GridItem>
                </Grid>
            </Box >
        </>
    )
}
