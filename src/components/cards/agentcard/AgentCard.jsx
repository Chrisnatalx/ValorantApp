import React from 'react'
import { AgentCardItem } from './AgentCardItem'
import { Center, Container, Grid, GridItem, } from '@chakra-ui/react'


export const AgentCard = ({ data }) => {
  return (
    <Center bg='#FFF8E8' >
      <Container maxW="container.xl" >
        <Grid justifyItems="center">
          {
            data.map((agent) => (
              <GridItem key={agent.uuid}>
                <AgentCardItem {...agent} />
              </GridItem>
            ))
          }
        </Grid>
      </Container>
    </Center>
  )
}
