import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomCard from './CustomCard';

const modules = [
  { title: 'Programación Dinámica', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
  { title: 'Teoría de Grafos', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(173, 216, 230, 0.3)' },
  { title: 'Complejidad de Algoritmos', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(255, 165, 0, 0.3)' },
  { title: 'Programación Lineal', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 99, 71, 0.3)' },
  { title: 'Demostraciones', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
  { title: 'Desarrollo Web', steps: '10 pasos', rating: 4.5, headerColor: 'rgba(255, 182, 193, 0.3)' },
  { title: 'Rust', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(173, 216, 230, 0.3)' },
  { title: 'Introducción a la Ciencia de la Computación', steps: '20 pasos', rating: 4.5, headerColor: 'rgba(255, 255, 0, 0.3)' },
  { title: 'Redes Neuronales', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(144, 238, 144, 0.3)' },
  { title: 'Estructuras de Datos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(123, 104, 238, 0.3)' },
  { title: 'Análisis de Algoritmos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(70, 130, 180, 0.3)' },
  { title: 'Sistemas Operativos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 140, 0, 0.3)' },
  { title: 'Bases de Datos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(218, 112, 214, 0.3)' },
  { title: 'Inteligencia Artificial', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 105, 180, 0.3)' },
  { title: 'Ingeniería de Software', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(65, 105, 225, 0.3)' },
  { title: 'Seguridad Informática', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 0, 0, 0.3)' },
  { title: 'Ingeniería de Requisitos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 0, 255, 0.3)' },
  { title: 'Interacción Humano-Computadora', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(0, 255, 255, 0.3)' },
  { title: 'Computación Gráfica', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(0, 0, 255, 0.3)' },
  { title: 'Lenguajes de Programación', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(128, 0, 128, 0.3)' },
  { title: 'Arquitectura de Computadoras', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(0, 128, 128, 0.3)' },
  { title: 'Teoría de la Computación', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 215, 0, 0.3)' },
  { title: 'Sistemas Distribuidos', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 192, 203, 0.3)' },
  { title: 'Computación Cuántica', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(0, 255, 0, 0.3)' },
  { title: 'Modelado y Simulación', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 69, 0, 0.3)' },
  { title: 'Criptografía', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(128, 0, 0, 0.3)' },
  { title: 'Procesamiento de Lenguajes Naturales', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(0, 0, 128, 0.3)' },
  { title: 'Computación Paralela y Concurrente', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 20, 147, 0.3)' },
  { title: 'Big Data', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(75, 0, 130, 0.3)' },
  { title: 'Aprendizaje Automático', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 0, 0, 0.3)' },
  { title: 'Procesamiento de Señales Digitales', steps: '30 pasos', rating: 4.5, headerColor: 'rgba(255, 140, 0, 0.3)' },
  // Continúa aquí con más módulos según sea necesario...
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
