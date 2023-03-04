import React from 'react'
import { CardItem } from './CardItem'
import { Center, Container, Grid, GridItem } from '@chakra-ui/react'

export const Card = ({data}) => {
  return (
    <Center>
        <Container maxW="container.xl">
            <Grid 
                templateColumns="repeat(auto-fit,minmax(300px,1fr))"
				justifyItems="center">
                    {data?.map((game)=>(
                        <GridItem key={game.uuid}>
                        <CardItem {...game} />
                    </GridItem>
                    ))}
            </Grid>
        </Container>
    </Center>
  )
}
