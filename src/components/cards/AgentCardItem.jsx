import React from 'react'
import 'animate.css'
import { Box, Divider, Grid, GridItem, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'

export const AgentCardItem = ({ displayName, fullPortrait, description, role, abilities }) => {



  return (
    <Box pt='80px' bg='#FFF8E8' w='100%'>
      <Grid gridTemplateColumns='1fr 1fr 1fr'>
        <GridItem className='animate__animated animate__fadeInLeft'>
          <Image src={fullPortrait} alt={displayName} _hover={{ transform: 'scale(1.25,1.3)' }} />
        </GridItem>
        <GridItem className='animate__animated animate__fadeInRight' >
          <Heading as='h2' size='3xl'>{displayName}</Heading>
          <Divider pt='10px' mb='10px' />
          <Heading as='h5' size='sm'> Role: {role.displayName}</Heading>
          <Text>{description}</Text>
          <Divider pt='10px' mb='10px' />
          <Heading as='h3' size='sm' mb='10px'> Special Abilities :</Heading>
          <Box bg='#0f1923' display='flex' justifyContent='space-around' h='70px' alignItems='center' >
            {abilities?.map((ability) => (
              <Popover key={ability.slot}  >
                <PopoverTrigger>
                  <Image
                    src={ability.displayIcon}
                    w='50px'
                    h='50px'
                    _hover={{ transform: 'scale(1.4,1.4)', bg: '#ff4655' }}
                    _expanded={{ transform: 'scale(1.4,1.4)', bg: '#ff4655' }}
                  />
                </PopoverTrigger>
                <PopoverContent bg='#0f1923' color='#ece8e1' fontSize='14px' p={4}>
                  <PopoverCloseButton _hover={{ bg: '#ff4655' }} />
                  <PopoverBody>{ability.description}</PopoverBody>
                </PopoverContent>
              </Popover>

            ))}
          </Box>
        </GridItem>
      </Grid>
    </Box >
  )
}
