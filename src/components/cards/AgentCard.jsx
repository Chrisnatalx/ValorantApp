import React from 'react'
import { Center, Container, Grid, GridItem, Select } from '@chakra-ui/react'
import { AgentCardItem } from './AgentCardItem'


export const AgentCard = ({ data }) => {
  return (
    <Center bg='#FFF8E8' border='2px #111'>
      <Container maxW="container.xl">
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
