import React from 'react'
import { Box, Grid, GridItem, Heading, Image } from '@chakra-ui/react'

export const MapItemCard = ({ displayName, splash }) => {
    return (
        <>
            <Grid gridTemplateRows='1fr' bg='#CDD1BF'>
                <GridItem >
                    {/* <Heading textAlign='center' zIndex={999}>{displayName}</Heading> */}
                    <Image src={splash} alt={displayName} />
                </GridItem>
            </Grid>
        </>
    )
}
