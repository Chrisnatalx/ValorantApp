import { Center, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { WeaponsCardItem } from './WeaponsCardItem'

export const WeaponsCard = ({ data }) => {

    return (
        <Container maxW="container.xl"  >
            <Grid
                templateColumns="repeat(auto-fit,minmax(330px,1fr))"
                justifyItems="center"
            >
                {data.map((weapon) => (
                    <GridItem key={weapon.uuid} m={10}>
                        <WeaponsCardItem {...weapon} />
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}
