import React from 'react';
import { Box, Typography, Container, Grid, Link, Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

const Navbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
}));

const AboutPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center' }}>
        <Logo>
          <Typography variant="h4" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#5C1D9E' }}>Lambda</span>
            <span style={{ color: '#fff', backgroundColor: '#5C1D9E', padding: '0 5px', borderRadius: '5px' }}>Learn</span>
          </Typography>
        </Logo>
        <Navbar>
          <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '1rem' }}>
            Acerca De
          </Link>
          <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '1rem' }}>
            Registro
          </Link>
          <Button variant="outlined" sx={{ color: '#5C1D9E', borderColor: '#5C1D9E', borderWidth: 1, fontSize: isMobile ? '0.8rem' : '1rem' }}>
            Ingresar
          </Button>
        </Navbar>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Acerca de la plataforma
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: isMobile ? '1rem' : '1.2rem', textAlign: 'justify' }}>
            Nuestra aplicación, <b>Lambda Learn</b>, está diseñada para los estudiantes que cursan la carrera de Ciencias de la Computación en la Facultad de Ciencias. Lo que la hace especial es que se ofrece como una herramienta colaborativa que reúne recursos educativos, conexiones estudiantiles y apoyo personalizado en un solo lugar, de forma que los estudiantes pueden ir viendo sus progresos y constancias.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src="path/to/your/image.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5C1D9E', color: '#fff', padding: '1rem 0', position: 'absolute', bottom: 0, left: 0 }}>
        <Typography variant="body1" sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}>
          © 2024 RedBlack. Todos los derechos reservados.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
