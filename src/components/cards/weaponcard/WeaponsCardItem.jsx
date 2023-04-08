import React from 'react'
import { Card, CardBody, CardHeader, Heading, Image, Divider, CardFooter, Stack } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";

export const WeaponsCardItem = ({ displayName, displayIcon, shopData, }) => {
    const [t] = useTranslation("global")


    return (
        <>
            <Card maxW='280px' h='380px' bg='#FFF8E8' mt={4} fontFamily="FF Mark W05,Arial,sans-serif" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                _hover={{ transform: 'scale(1.1,1.1)' }}>
                <CardHeader>
                    <Heading >{displayName}</Heading>
                </CardHeader>

                <CardBody>
                    <Image src={displayIcon} alt={displayName} p={0} />
                </CardBody>
                <Divider />
                <CardFooter p={3}>
                    <Stack spacing={3}  >
                        <Heading as='h3' size='sm' mb='10px'>{t("weapons.cost")}: ${shopData?.cost || 'Free'} </Heading>
                        <Heading as='h3' size='sm' mb='10px'>{t("weapons.category")}: {shopData?.category || 'Melee'}</Heading>
                    </Stack>

                </CardFooter>


            </Card>
        </>
    )
}
