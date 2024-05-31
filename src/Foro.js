import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, InputBase, IconButton, List, ListItem, ListItemText, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';

const forumTopics = [
  { title: "¿Cómo aprender React?", author: "Carlos Pérez", replies: 12, avatar: "https://via.placeholder.com/40" },
  { title: "Mejores prácticas en CSS", author: "Ana Gómez", replies: 8, avatar: "https://via.placeholder.com/40" },
  { title: "Cómo mejorar en JavaScript", author: "Luis Hernández", replies: 15, avatar: "https://via.placeholder.com/40" },
  { title: "Consejos para entrevistas técnicas", author: "María López", replies: 10, avatar: "https://via.placeholder.com/40" },
  { title: "Guía completa de Node.js", author: "Juan Martín", replies: 20, avatar: "https://via.placeholder.com/40" },
  { title: "Introducción a TypeScript", author: "Laura Rodríguez", replies: 5, avatar: "https://via.placeholder.com/40" },
  { title: "Tips para usar Git y GitHub", author: "José García", replies: 18, avatar: "https://via.placeholder.com/40" },
  { title: "Desarrollo de aplicaciones móviles", author: "Lucía Sánchez", replies: 25, avatar: "https://via.placeholder.com/40" },
  { title: "Cómo diseñar una API RESTful", author: "Pedro Ramírez", replies: 22, avatar: "https://via.placeholder.com/40" },
  { title: "Introducción a Docker", author: "Carmen Torres", replies: 7, avatar: "https://via.placeholder.com/40" },
  { title: "Testing en JavaScript", author: "Roberto Díaz", replies: 14, avatar: "https://via.placeholder.com/40" },
  { title: "Optimización de rendimiento en frontend", author: "Gloria Fernández", replies: 9, avatar: "https://via.placeholder.com/40" },
  { title: "Programación funcional en JavaScript", author: "Felipe Castillo", replies: 11, avatar: "https://via.placeholder.com/40" },
  { title: "Cómo empezar con GraphQL", author: "Sara Morales", replies: 13, avatar: "https://via.placeholder.com/40" },
  { title: "Desarrollo full-stack con MERN", author: "Manuel Ortega", replies: 17, avatar: "https://via.placeholder.com/40" },
  { title: "Buenas prácticas en UX/UI", author: "Elena Ruiz", replies: 6, avatar: "https://via.placeholder.com/40" },
  { title: "Introducción a Webpack", author: "Daniel Castro", replies: 10, avatar: "https://via.placeholder.com/40" },
  { title: "Cómo usar Redux con React", author: "Isabel Romero", replies: 19, avatar: "https://via.placeholder.com/40" },
  { title: "Trabajando con APIs externas", author: "Andrés Molina", replies: 16, avatar: "https://via.placeholder.com/40" },
  { title: "Desarrollo de chatbots", author: "Patricia Jiménez", replies: 8, avatar: "https://via.placeholder.com/40" },
];


const Foro = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTopics = forumTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
          Foro
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', mb: 4, borderRadius: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="Buscar en el foro"
                inputProps={{ 'aria-label': 'buscar en el foro' }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
              <Typography variant="h6" gutterBottom>
                Temas Recientes
              </Typography>
              <List>
                {filteredTopics.map((topic, index) => (
                  <ListItem button key={index}>
                    <Avatar src={topic.avatar} sx={{ mr: 2 }} />
                    <ListItemText
                      primary={topic.title}
                      secondary={`${topic.author} - ${topic.replies} respuestas`}
                    />
                    <IconButton edge="end">
                      <ChatIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Foro;
