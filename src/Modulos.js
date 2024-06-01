import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, InputBase, IconButton, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomCard from './CustomCard';

const categories = [
  { name: 'Ciencias Básicas', color: '#4CEC8C' },
  { name: 'Programación y Desarrollo de Software', color: '#54A0CB' },
    { name: 'Ingeniería y Arquitectura de Software', color: '#9370DB' },
  { name: 'Inteligencia Artificial y Ciencia de Datos', color: '#FFF6A0' },
  { name: 'Sistemas y Redes', color: '#FFCEA0' },
  { name: 'Teoría y Algoritmos', color: '#5DC1B9' },

  { name: 'Desarrollo Web y Aplicaciones', color: '#FFA0DF' },
  { name: 'Seguridad y Criptografía', color: '#EC6969' },
  { name: 'Idiomas', color: '#85E9FF' },
];

const modules = [
  { title: 'Programación Dinámica', steps: '20 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Teoría de Grafos', steps: '20 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Complejidad de Algoritmos', steps: '20 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Programación Lineal', steps: '30 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Desarrollo Web', steps: '10 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Rust', steps: '20 pasos', rating: 4.5, category: 'Programación y Desarrollo de Software' },
  { title: 'Introducción a la Ciencia de la Computación', steps: '20 pasos', rating: 4.5, category: 'Ciencias Básicas' },
  { title: 'Redes Neuronales', steps: '30 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'Estructuras de Datos', steps: '30 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Análisis de Algoritmos', steps: '30 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Sistemas Operativos', steps: '30 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Bases de Datos', steps: '30 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Inteligencia Artificial', steps: '30 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'Ingeniería de Software', steps: '30 pasos', rating: 4.5, category: 'Ingeniería y Arquitectura de Software' },
  { title: 'Seguridad Informática', steps: '30 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  { title: 'Criptografía', steps: '30 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  // Expansion begins here
  { title: 'Desarrollo de Videojuegos', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Entretenimiento' },
  { title: 'Machine Learning', steps: '40 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'Python Avanzado', steps: '20 pasos', rating: 4.5, category: 'Programación y Desarrollo de Software' },
  { title: 'Javascript Moderno', steps: '20 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Diseño de Interfaces de Usuario', steps: '20 pasos', rating: 4.5, category: 'Diseño y Experiencia de Usuario' },
  { title: 'Ciberseguridad', steps: '30 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  { title: 'Análisis de Datos', steps: '30 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'Linux Básico', steps: '20 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Desarrollo de Aplicaciones Móviles', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Aplicaciones' },
  { title: 'Java Fundamentals', steps: '20 pasos', rating: 4.5, category: 'Programación y Desarrollo de Software' },
  { title: 'Diseño de Algoritmos', steps: '30 pasos', rating: 4.5, category: 'Teoría y Algoritmos' },
  { title: 'Firebase para Desarrollo Web', steps: '20 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Arquitectura de Computadoras', steps: '30 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'SQL Avanzado', steps: '20 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Ruby on Rails', steps: '20 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Visualización de Datos', steps: '20 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'Swift para iOS', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Aplicaciones' },
  { title: 'Big Data Fundamentals', steps: '30 pasos', rating: 4.5, category: 'Inteligencia Artificial y Ciencia de Datos' },
  { title: 'UX Research', steps: '20 pasos', rating: 4.5, category: 'Diseño y Experiencia de Usuario' },
  { title: 'Blockchain y Criptomonedas', steps: '20 pasos', rating: 4.5, category: 'Tecnologías Emergentes' },
  { title: 'Control de Versiones con Git', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Colaboración' },
  { title: 'Inglés para Programadores', steps: '20 pasos', rating: 4.5, category: 'Habilidades Profesionales' },
  { title: 'Flutter para Desarrollo Móvil', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Aplicaciones' },
  { title: 'Gestión de Proyectos de Software', steps: '20 pasos', rating: 4.5, category: 'Ingeniería y Arquitectura de Software' },
  { title: 'Hacking Ético', steps: '30 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  { title: 'Node.js para Backend', steps: '20 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Automatización con Python', steps: '20 pasos', rating: 4.5, category: 'Automatización y Scripts' },
  { title: 'Diseño Gráfico Digital', steps: '20 pasos', rating: 4.5, category: 'Diseño y Experiencia de Usuario' },
  { title: 'React Native para Desarrollo Móvil', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Aplicaciones' },
  { title: 'Gestión de Bases de Datos con SQL', steps: '20 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Testing de Software', steps: '20 pasos', rating: 4.5, category: 'Calidad y Pruebas de Software' },
  { title: 'Gestión de Servidores Linux', steps: '20 pasos', rating: 4.5, category: 'Sistemas y Redes' },
  { title: 'Ciberseguridad Avanzada', steps: '30 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  { title: 'HTML5 y CSS3', steps: '20 pasos', rating: 4.5, category: 'Desarrollo Web y Aplicaciones' },
  { title: 'Java Avanzado', steps: '20 pasos', rating: 4.5, category: 'Programación y Desarrollo de Software' },
  { title: 'Programación Funcional', steps: '20 pasos', rating: 4.5, category: 'Programación y Desarrollo de Software' },
  { title: 'Análisis de Riesgos en Seguridad Informática', steps: '20 pasos', rating: 4.5, category: 'Seguridad y Criptografía' },
  { title: 'SwiftUI para iOS', steps: '20 pasos', rating: 4.5, category: 'Desarrollo de Software y Aplicaciones' },
];


const Modulos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(module.category))
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
        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ pb: 2 }}>
          Categorías
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {categories.map((category) => (
            <Grid item key={category.name}>
              <Chip
                label={category.name}
                onClick={() => handleCategoryClick(category.name)}
                style={{
                  backgroundColor: selectedCategories.includes(category.name) ? category.color : 'white',
                  borderColor: category.color,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  color: selectedCategories.includes(category.name) ? 'white' : 'black',
                  fontWeight: 'bold'
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}>
          {filteredModules.map((module, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                title={module.title}
                step={module.steps}
                rating={module.rating}
                bgcolor="white"
                headerColor={categories.find(category => category.name === module.category)?.color || 'white'}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Modulos;
