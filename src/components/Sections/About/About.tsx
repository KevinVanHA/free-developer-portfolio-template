import { Container, Box, Grid, Button } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';
import InJoi from '/public/assets/injoi.png'

const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
        id='about'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            alt='injoiLogo'
                            className='img1 '
                            layout='fill'
                            src={`/assets/InJoi.png`}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.8em',
                                md:0,
                            }
                        }}
                            fontWeight='600'>
                            About the creator
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                      Kevin is a graphic designer from Belgium that specializes in UX Design. He&apos;s been interested in Blockchain and NFT&apos;s for over 4 years, even doing his masters&apos; thesis on the development of a NFT website! This project is the first 10k NFT project he has done!
                      

                        </Typography>
                    </Box>
                    <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            },
                            pb:'.5em'
                        }}>
                      After partnering up with EAC, this concept came to life, and it&apos;s sure to be the first of many collections being released! Trying out new technologies, new marketing techniques, and giving away a plethora of other prizes, this collection isn&apos;t to be missed!
                      <br />
                      <br />
                      <Button
                            onClick={() => window.open('https://www.behance.net/KevinVH', '_blank')}
                            className='ctabtn'
                            sx={{
                            color: 'blue',
                            opacity:50,
                            border: '1px solid white',
                            mt: '.25em',
                            ':hover': {
                                background: 'white',
                                color: '#0092ff'
                            },
                            padding: '.5em .5em'
                        }}
                            variant='outlined'>
                            Lean more about Kevin
                        </Button>
                        </Typography>
                    </Grid>
            </Grid>

        </Container>

        </>
    
    )
}

export default About
