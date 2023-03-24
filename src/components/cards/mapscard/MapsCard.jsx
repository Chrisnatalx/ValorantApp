import React, { useEffect } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Center, Container, Image, Select, useMediaQuery, } from '@chakra-ui/react'

const maps = [
    { value: 'd960549e-485c-e861-8d71-aa9d1aed12a2', name: 'Split' },
    { value: '7eaecc1b-4337-bbf6-6ab9-04b8f06b3319', name: 'Ascent' },
    { value: '2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba', name: 'Bind' },
    { value: 'e2ad5c54-4114-a870-9641-8ea21279579a', name: 'Icebox' },
    { value: 'b529448b-4d60-346e-e89e-00a4c527a405', name: 'Fracture' },
    { value: '2fb9a4fd-47b8-4e7d-a969-74b4046ebd53', name: 'Breeze' },
    { value: '2fe4ed3a-450a-948b-6d6b-e89a78e680a9', name: 'Lotus' },
    { value: '2bee0dc9-4ffe-519b-1cbd-7fbe763a6047', name: 'Haven' },
    { value: 'fd267378-4d1d-484f-ff52-77821ed10dc2', name: 'Pearl' },
    { value: 'ee613ee9-28b7-4beb-9666-08db13bb2244', name: 'The Range' }]


export const MapsCard = ({ data, setId }) => {

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    const { displayName, splash } = data

    const handleClick = (value) => {
        setId(value)
    }

    const handleChange = (e) => {
        setId(e.target.value)
    }
    useEffect(() => {
        if (!isLargerThan800) setId('d960549e-485c-e861-8d71-aa9d1aed12a2');

    }, [isLargerThan800])

    return (

        <Box display='flex' flexDirection='column'>
            {
                isLargerThan800 ? <Center flexDirection='column' w='100%'><ButtonGroup color='#FFF' display='flex' justifyContent='space-around' alignItems='center' w='100%' fontFamily="FF Mark W05,Arial,sans-serif" my={2}>
                    {maps.map(({ value, name }) => <Button m={1} color='#FFF' key={value} value={value} variant='link' onClick={() => handleClick(value)} >{name}</Button>)}
                </ButtonGroup>
                    <Container maxW='container.xl'>
                        <Image src={splash} alt={displayName} borderRadius='xl' mb={4} />
                    </Container>
                </Center>
                    :
                    <Center flexDirection='column' w='100%'>
                        <Select m={4} righticon={<ChevronDownIcon />} w='200px' onChange={handleChange} bg='#8b978f' borderColor='#8b978f' fontFamily="FF Mark W05,Arial,sans-serif" >
                            {maps.map(({ value, name }) => <option key={value} value={value}  >{name}</option>)}

                        </Select>
                        <Container maxW='container.xl'>
                            <Image src={splash} alt={displayName} borderRadius='xl' h='auto' minHeight='250px' mb={4} />
                        </Container>
                    </Center>
            }
        </Box>
    )
}
