import React from 'react'

export const Video = () => {
    return (
        <video
            width='100%'
            height='auto'
            preload='true'
            muted
            loop
            playsInline={true}
            autoPlay={true}
            poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte299f23c6e55ebed/63bcad4899e03c1edced9b6f/VAL_Ep6_Homepage-CG-Still.jpg"
            data-testid="hero:video"
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
            type="video/mp4">

        </video>
    )
}
