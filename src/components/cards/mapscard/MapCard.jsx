import { Center, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { MapItemCard } from './MapItemCard'

export const MapCard = ({ data }) => {

    return (
        <>
            <Center>
                <Container maxW="container.xl" >
                    <Grid justifyItems='center'>
                        {
                            data.map((map) => (
                                <GridItem key={map.uuid}>
                                    <MapItemCard {...map} />
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Container>
            </Center>

        </>
    )
}
