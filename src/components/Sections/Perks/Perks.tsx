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
    text:'Created by the most visionary minds of the digital age, injoi exists to inspire and uplift, to ignite the flames of passion and curiosity in the hearts of all who encounter her.As you delve into the world of injoi, you will uncover a rich tapestry of stories and adventures waiting to be told. ',
},
{
    title : 'What else?',
    text : 'Stand a chance to win big with injoi! With over 300,000,000 $EAC tokens up for grabs, including ownership shares of Evil Aliens Collective Inc., your journey with injoi holds exciting rewards. Total value $4,298 usd in prizes.',
    
}   ,
{
    title : 'The Journey',
    
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
            <br />
            <br />
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
               Your chance to win!
            </Typography>

            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '800px',
                textAlign: 'left',
                fontSize: {
                    xs: '.8em',
                    sm: '1em',
                    lg: '1.5em'
                }
            }}>
                A total of 210,000,000 $EAC <br /> <br />
                <li>100 x  EAC .01 ownership</li>
                <li>1 Animated x 10,000,000 $EAC</li>
                <li>1000 x 50000 $EAC</li>
                <li>500 x 100000 $EAC</li>
                <li>400 x 250000 $EAC </li>


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
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} />
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks