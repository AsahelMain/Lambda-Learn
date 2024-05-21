import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import CustomCard from './CustomCard';
import Timeline from './Timeline';

const steps = [
  { name: 'Inicio', percentage: 10 },
  { name: 'Paso 1', percentage: 25 },
  { name: 'Paso 2', percentage: 50 },
  { name: 'Paso 3', percentage: 75 },
  { name: 'Paso Final', percentage: 100 },
];

const Progreso = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{pb:5}}>
          Progreso
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px', height: '95%' }}>
              <Typography variant="h6" gutterBottom align="center">
                Consulta tu progreso
              </Typography>
              <Timeline steps={steps} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" gutterBottom>
              Mis cursos
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomCard
                  title="Complejidad de Algoritmos"
                  step="4/10"
                  rating={4.5}
                  bgcolor="white"
                  headerColor="rgba(255, 165, 0, 0.3)"
                />
              </Grid>
              <Grid item xs={6}>
                <CustomCard
                  title="Redes Neuronales"
                  step="30 pasos"
                  rating={4.8}
                  bgcolor="white"
                  headerColor="rgba(144, 238, 144, 0.3)"
                />
              </Grid>
              <Grid item xs={6}>
                <CustomCard
                  title="ICC"
                  step="20 pasos"
                  rating={4.5}
                  bgcolor="white"
                  headerColor="rgba(255, 255, 0, 0.3)"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Progreso;
