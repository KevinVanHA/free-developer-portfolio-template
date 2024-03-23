import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [{
    title:'Created by',
    Icon:HandymanIcon,
    text:'Created by the most visionary minds of the digital age, injoi exists to inspire and uplift, to ignite the flames of passion and curiosity in the hearts of all who encounter her.As you delve into the world of injoi, you will uncover a rich tapestry of stories and adventures waiting to be told. Each NFT, a window into her captivating universe, holds the key to unlocking new realms of imagination and possibility.',
},
{
    title : 'What else?',
    text : 'But injoi is not just a work of art; she is a gateway to a world of endless opportunities. By minting her NFTs, you not only become a part of her story but also gain access to a treasure trove of token prizes and rewards.',
    Icon :  HttpIcon,
}   ,
{
    title : 'The Journey',
    Icon : DevicesIcon,
    text : 'As you journey alongside injoi, you will discover that the true magic lies not in the pixels that form her image, but in the connections forged and the dreams realized. So, why should you mint injoi? Because in her, you will find not just a collection of tokens, but a journey of self-discovery, inspiration, and boundless joy.'
}
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
               But who is injoy?
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                 She is more than just a collection of lines and colors; she is the embodiment of hope, love, and boundless creativity.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks