import React from 'react';
import { Box, Typography, Button, Container, Grid, Link, useMediaQuery } from '@mui/material';

const LandingPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        <span style={{ color: '#5C1D9E' }}>Lambda</span>
                        <span style={{ color: '#fff', backgroundColor: '#5C1D9E', padding: '0 5px' }}>Learn</span>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: { xs: '100%', md: 500 }, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>
                            Acerca De
                        </Link>
                        <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>
                            Registro
                        </Link>
                        <Button variant="outlined" sx={{ color: '#5C1D9E', borderColor: '#5C1D9E', borderWidth: 1 }} href='/progreso'>
                            Ingresar
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={7}>
                    <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }} gutterBottom>
                        Libera tu potencial de desarrollador
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'secondary.main', mb: 2, fontSize: '1.2rem', textAlign: { xs: 'center', md: 'left' } }}>
                        8 de cada 10 alumnos prefieren <b>LambdaLearn</b> para aprender y complementar su aprendizaje.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        position: isMobile ? 'fixed' : 'absolute',
                        zIndex: -1,
                        right: 0,
                        top: isMobile ? 'auto' : 0
                    }}>
                        <img src="landing.png" alt="Decorative" style={{ maxWidth: '80%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5C1D9E', color: '#fff', padding: '1rem 0',position:'absolute',bottom:0,left:0 }}>
                <Typography variant="body1">
                    © 2022 RedBlack. Todos los derechos reservados.
                </Typography>
            </Box>
        </Container>

    );
};

export default LandingPage;
