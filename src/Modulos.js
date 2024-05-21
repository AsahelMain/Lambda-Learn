import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomCard from './CustomCard';

const modules = [
  { title: 'Programacion Dinámica', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
  { title: 'Teoria de graficas', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(173, 216, 230, 0.3)' },
  { title: 'Complejidad de Algoritmos', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(255, 165, 0, 0.3)' },
  { title: 'Programacion Lineal', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 99, 71, 0.3)' },
  { title: 'Demostraciones', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
  { title: 'Desarrollo Web', steps: '10 pasos', rating: 4.5, headerColor: 'rgba(255, 182, 193, 0.3)' },
  { title: 'Rust', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(173, 216, 230, 0.3)' },
  { title: 'ICC', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(255, 255, 0, 0.3)' },
  { title: 'Redes Neuronales', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
];

const Modulos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
          Módulos
        </Typography>
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', mb: 4, borderRadius: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Buscar módulos"
            inputProps={{ 'aria-label': 'buscar módulos' }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container spacing={4}>
          {filteredModules.map((module, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                title={module.title}
                step={module.steps}
                rating={module.rating}
                bgcolor="white"
                headerColor={module.headerColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Modulos;
