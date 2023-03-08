import { Card, CardBody, CardHeader, Heading, Text, Image, Divider, CardFooter } from '@chakra-ui/react'
import React from 'react'

export const WeaponsCardItem = ({ displayName, displayIcon, shopData, }) => {
    // console.log(shopData.cost)
    return (
        <>
            <Card w='300px' h='350px' bg='#FFF8E8'>
                <CardHeader>
                    <Heading>{displayName}</Heading>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Image src={displayIcon} alt={displayName} />
                </CardBody>
                <CardFooter>
                    <Text>$$</Text>
                </CardFooter>
                {/* <Text>{shopData.cost}</Text>
                    <Text>{shopData.category}</Text> */}


            </Card>
        </>
    )
}
