import { Box, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const AgentCardItem = ({ displayName, fullPortrait, description, role, abilities }) => {



  return (
    <Box pt='80px' bg='#FFF8E8' w='100%'>
      <Grid gridTemplateColumns='1fr 1fr 1fr'>
        <GridItem>
          <Image src={fullPortrait} alt={displayName} _hover={{ transform: 'scale(1.3,1.3)' }} />
        </GridItem>
        <GridItem>
          <Heading as='h2' size='3xl'>{displayName}</Heading>
          <Divider pt='10px' mb='10px' />
          <Heading as='h5' size='sm'> Role: {role.displayName}</Heading>
          <Text>{description}</Text>
          <Divider pt='10px' mb='10px' />
          <Heading as='h3' size='sm' mb='10px'> Special Abilities :</Heading>
          <Box bg='#0f1923' display='flex' justifyContent='space-around' h='70px' alignItems='center' >
            {abilities?.map((ability) => (
              <Image key={ability.slot} src={ability.displayIcon} w='50px' h='50px' _hover={{ transform: 'scale(1.4,1.4)', bg: '#ff4655' }} />
            ))}
          </Box>

        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Box >
  )
}
