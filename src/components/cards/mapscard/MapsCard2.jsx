import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Center, Container, Image, Select } from '@chakra-ui/react'
import React from 'react'


export const MapsCard2 = ({ data, setId }) => {
    const { displayName, splash } = data

    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (

        <Box display='flex' flexDirection='column'>
            <Center flexDirection='column'>
                <Select m={2} righticon={<ChevronDownIcon />} w='200px' onChange={handleChange} bg='#8b978f' borderColor='#8b978f' fontFamily="FF Mark W05,Arial,sans-serif">
                    <option value='d960549e-485c-e861-8d71-aa9d1aed12a2' bg='#8b978f'>Split</option>
                    <option value='7eaecc1b-4337-bbf6-6ab9-04b8f06b3319' bg='#8b978f'>Ascent</option>
                    <option value='2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba' bg='#8b978f'>Bind</option>
                    <option value='e2ad5c54-4114-a870-9641-8ea21279579a' bg='#8b978f'>Icebox</option>
                    <option value='b529448b-4d60-346e-e89e-00a4c527a405' bg='#8b978f'>Fracture</option>
                    <option value='2fb9a4fd-47b8-4e7d-a969-74b4046ebd53' bg='#8b978f'>Breeze</option>
                    <option value='2fe4ed3a-450a-948b-6d6b-e89a78e680a9' bg='#8b978f'>Lotus</option>
                    <option value='2bee0dc9-4ffe-519b-1cbd-7fbe763a6047' bg='#8b978f'>Haven</option>
                    <option value='fd267378-4d1d-484f-ff52-77821ed10dc2' bg='#8b978f'>Pearl</option>
                    <option value='ee613ee9-28b7-4beb-9666-08db13bb2244' bg='#8b978f'>The Range</option>
                </Select>
                <Container maxW='container.xl'>
                    <Image src={splash} alt={displayName} borderRadius='xl' />
                </Container>
            </Center>
        </Box>
    )
}
