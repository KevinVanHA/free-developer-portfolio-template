import { Container, Box, Grid, Button } from '@mui/material';
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
                <Typography variant="h3" align="center" gutterBottom sx={{ mb: '1.5em'}}>
                    EAC
                </Typography>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Logo */}
                    <Grid item>
                        <Image
                            alt='Your Logo'
                            src='/assets/EACLogo.png'
                            width={200}
                            height={225}
                        />
                    </Grid>
                    {/* Description */}
                    <Grid item>
                        <Typography variant="body1" align="center" sx={{ mt: 2, mb: 1 }}>
                            Description of your sponsor goes here.
                        </Typography>
                    </Grid>
                    {/* Website Button */}
                    <Grid item>
                        <Button variant="contained" color="primary" href="https://eacnft.com/">
                            Visit EAC Website
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Sponsors;
