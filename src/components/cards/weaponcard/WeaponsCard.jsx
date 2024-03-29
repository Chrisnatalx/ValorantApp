import { Center, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { WeaponsCardItem } from './WeaponsCardItem'

export const WeaponsCard = ({ data }) => {

    return (
        <Center>
            <Container maxW="container.xl" bg='#0f1923' p={0} >
                <Grid
                    templateColumns="repeat(auto-fit,minmax(330px,1fr))"
                    justifyItems="center"
                >
                    {data.map((weapon) => (
                        <GridItem key={weapon.uuid}  >
                            <WeaponsCardItem {...weapon} />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Center>
    )
}
