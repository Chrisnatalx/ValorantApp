import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const CardItem = ({displayName, duration,displayIcon}) => {
    
  return (
    <Card
        maxW="sm" m={4} fontFamily="Open Sans"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bg='#000'
        >
        <Image
            color='#000'
            objectFit='cover'
            maxW={{ base: '100%', sm: '128px' }}
            src={displayIcon}
            alt={displayName}
        />

        <Stack>
            <CardBody>
            <Heading size='md' color='#F2F2F2'>{displayName}</Heading>

            <Text py='2' color='#F2F2F2'>
                {duration}
            </Text>
            </CardBody>
        </Stack>
    </Card>
  )
}
