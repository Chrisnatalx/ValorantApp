import React from 'react';

export const Video = () => {
	return (
		<video
			width="100%"
			preload="true"
			muted
			loop
			playsInline={true}
			autoPlay={true}
			poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte299f23c6e55ebed/63bcad4899e03c1edced9b6f/VAL_Ep6_Homepage-CG-Still.jpg"
			data-testid="hero:video"
			src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
			type="video/mp4"
		></video>
	);
};
