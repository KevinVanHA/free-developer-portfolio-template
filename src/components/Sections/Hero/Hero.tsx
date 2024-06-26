import { Box, Button, Container, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';
import Image from 'next/image';
import BPHeroimage from '../../../../public/assets/BPHeroimage.png';

// Define button styles
export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px'
};

const Hero = () => {
    const ref = useRef();
    const q = gsap
        .utils
        .selector(ref);
    gsap.registerPlugin(ScrollToPlugin);
    useEffect(() => {
        HeroSectionAnimation(q);
    }, [q]);

    return (
        <div className="hero-container"> {/* Apply the .hero-container class */}
            <Container
                id='hero'
                
                sx={{
                    margin: '0 auto',
                    py: {
                        xs: '7.5em',
                        sm: '8.5em'
                    },
                    backgroundImage: `url(${BPHeroimage.src})`, // Corrected background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh', // Ensures the image fills the entire screen height
                    width: '100%', // Make the Container full width of its parent
                    borderRadius: 0, // Remove border-radius
                }}
            >
                <Grid
                    container
                    sx={{
                        justifyContent: 'space-between'
                    }}
                >
                    <Grid item xs={12} sm={10} md={8} lg={7}>
                        <Box ref={ref}>
                            {/* Your content here */}
                            <Typography
                                className='t1'
                                variant='h1'
                                sx={{
                                    fontSize: {
                                        xs: '2.4em',
                                        sm: '3.4em',
                                        md: '3.8em'
                                    },
                                    textAlign: 'left',
                                    transform: 'translateY(40px)',
                                    opacity: 0,
                                    pt: '1em',
                                    fontWeight: '600'
                                }}
                            >
                                Meet injoi,  <br />a digital <br /> hologram girl
                            </Typography>
                            <Typography
                                variant='h2'
                                className='secondary t2 t25o0'
                                sx={{
                                    textAlign: 'left',
                                    pt: '1.5em',
                                    fontSize: {
                                        xs: '.9em',
                                        sm: '1em'
                                    },
                                    maxWidth: '570px',
                                    fontWeight: '300'
                                }}
                            >
                                Born from the depths of cyberspace, where pixels dance with the rhythm of imagination and dreams take flight in the realm of virtual reality. With her ethereal beauty and enigmatic charm, injoi emerges as a beacon of light in a world shrouded in darkness.
                            </Typography>
                            <Box
                                sx={{
                                    my: '2.5em',
                                    gap: '.8em',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Discord Button */}
                                <a href={`https://discord.com/channels/1131625905601650719/1220060290335379516/1221344390354571324`} rel="noreferrer" target='_blank'>
                                    <Button
                                        className="b1 explore offset"
                                        sx={{
                                            opacity: 0,
                                            borderRadius: 0,
                                            padding: '.75em 2.5em',
                                            flex: { xs: 1, sm: 'inherit' },
                                        }}
                                    >
                                        Join for Whitelist
                                    </Button>
                                </a>

                                {/* Opensea Button */}
                                <a href={`https://opensea.io/`} rel="noreferrer" target='_blank'>
                                    <Button
                                        className='b2'
                                        sx={{
                                            ...btnStyles,
                                            opacity: 0,
                                            height: 'max-content',
                                            padding: '1em 1.5em',
                                            width: { xs: '100%', sm: 'auto' },
                                            ":hover": {
                                                color: '#0092ff'
                                            }
                                        }}
                                        variant='text'
                                    >
                                        <Typography fontSize='14px'>
                                            View Opensea
                                        </Typography>
                                    </Button>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{
                            mb: {
                                xs: '3.5em',
                                sm: '4em',
                                lg: '1em'
                            },
                            mr: {
                                sm: '1em',
                                md: '2em',
                                lg: '0em'
                            },
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'flex-end'
                        }}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                    >
                        <Box
                            sx={{
                                borderRadius: '6px',
                                width: '100%', // Make the box full width of its parent container
                            }}
                        >
                            {/* Your content here */}
                            <Box
                                className='mainBox'
                                sx={{
                                    opacity: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    height: '460px',
                                    boxShadow: {
                                        xs: '.5em 3em 0 #313131 ',
                                        sm: '2em 3em 0px #313131'
                                    }
                                }}
                            >
                                <Image
                                    layout='fill'
                                    style={{
                                        opacity: 0,
                                        borderRadius: '6px',
                                        zIndex: '2'
                                    }}
                                    className='img1'
                                    src={`/assets/injoi.gif`}
                                    alt="injoy gif"
                                />
                                <Box
                                    className='gradientBg'
                                    sx={{
                                        width: '100px',
                                        height: '100px',
                                        zIndex: '0',
                                        position: 'absolute',
                                        right: {
                                            xs: '-1%',
                                            sm: '-5%'
                                        },
                                        opacity: 0,
                                        bottom: '-5%',
                                        background: 'transparent',
                                        backgroundImage: 'radial-gradient(white 2px, transparent 0)',
                                        backgroundSize: '15px 13px'
                                    }}
                                ></Box>
                                <Box
                                    className='quoteBox'
                                    sx={{
                                        zIndex: '2',
                                        position: 'absolute',
                                        bottom: {
                                            xs: '0%',
                                            lg: '-5%'
                                        },
                                        width: '100%',
                                        right: {
                                            sm: '25%'
                                        },
                                        top: '105%',
                                        overflow: 'hidden',
                                        opacity: 0,
                                        background: '#0092ff'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '300',
                                            fontSize: '.85em',
                                            padding: '1em'
                                        }}
                                    >
                                        {"A free NFT mint, a digital muse, and a gateway to rewards "}
                                        <span style={{ color: 'white' }}>
                                            {" - By "}
                                            <a href="https://eacnft.com/" target="_blank" rel="noopener noreferrer">
                                                {"EAC"}
                                            </a>
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Hero;
