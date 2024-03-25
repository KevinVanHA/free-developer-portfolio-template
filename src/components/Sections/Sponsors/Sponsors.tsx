import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const Sponsors = () => {
    return (
        <>
            
            <Container
                id='second-section'
                maxWidth='lg'
                sx={{
                    margin: 'auto',
                    py: '6em',
                }}
            >
                <Typography variant="h2" align="center" gutterBottom sx={{ mb: '1.5em'}}>
                    My Creators
                </Typography>
                <Grid
                    container
                    justifyContent='center' // Center the logos horizontally
                    alignItems='center' // Center the images vertically within their grid items
                    sx={{
                        
                    }}
                >
                    {/* Add your grid items for the second section */}
                    {/* Example for 3 logos */}
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        {/* Logo 1 */}
                        
                        <Image
                            alt='EAC Logo'
                            src='/assets/EACLogo.png'
                            width={200}
                            height={225}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        {/* Logo 2 */}
                            <Image
                            alt='DarkKevinLogo'
                            src='/assets/DKLogo.png'
                            width={200}
                            height={225}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        {/* Logo 3 */}
                        
                        <Image
                            alt='KVH Logo'
                            src='/assets/KVHLogo.png'
                            width={200}
                            height={225}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Sponsors;