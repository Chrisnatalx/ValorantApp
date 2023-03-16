import React from 'react'
import { Card, CardBody, CardHeader, Heading, Image, Divider, CardFooter, Stack } from '@chakra-ui/react'

export const WeaponsCardItem = ({ displayName, displayIcon, shopData, }) => {



    return (
        <>
            <Card w='300px' h='380px' bg='#FFF8E8' fontFamily="FF Mark W05,Arial,sans-serif" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                _hover={{ transform: 'scale(1.1,1.1)' }}>
                <CardHeader>
                    <Heading >{displayName}</Heading>
                </CardHeader>

                <CardBody>
                    <Image src={displayIcon} alt={displayName} maxH='300px' p={0} />
                </CardBody>
                <Divider />
                <CardFooter p={3}>
                    <Stack spacing={3}  >
                        <Heading as='h3' size='sm' mb='10px'>Cost in game: ${shopData?.cost || 'Free'} </Heading>
                        <Heading as='h3' size='sm' mb='10px'>Category: {shopData?.category || 'Melee'}</Heading>
                    </Stack>

                </CardFooter>


            </Card>
        </>
    )
}
