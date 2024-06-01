import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Paper, InputBase, IconButton, List, ListItem, ListItemText, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

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

const personas = [
  { name: "Selene Martínez", avatar: "https://via.placeholder.com/40" },
  { name: "Asahel Main", avatar: "https://via.placeholder.com/40" },
  { name: "Zuri Uribe", avatar: "https://via.placeholder.com/40" },
  { name: "Carlos Pérez", avatar: "https://via.placeholder.com/40" },
  { name: "Ana Gómez", avatar: "https://via.placeholder.com/40" },
  { name: "Luis Hernández", avatar: "https://via.placeholder.com/40" },
];

const updates = [
  { author: "Zuri UG", time: "14:00hrs", content: "Me enteré que el Miércoles por la noche tomaron la facultad ¿Es cierto?" },
  { author: "Alexys Gómez", time: "15:00hrs", content: "No creo que sea cierto, a esa hora ya debieron estar durmiendo" },
  { author: "Selene Marisol", time: "5min", content: "Debido a esas noticias, y que el semestre terminará pronto, todos tienen 10." },
];

const Foro = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [personaIndex, setPersonaIndex] = useState(0);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTopics = forumTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextPersonas = () => {
    setPersonaIndex((prevIndex) => (prevIndex + 3) % personas.length);
  };

  const prevPersonas = () => {
    setPersonaIndex((prevIndex) => (prevIndex - 3 + personas.length) % personas.length);
  };

  const displayedPersonas = personas.slice(personaIndex, personaIndex + 3);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
          Foro
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, mb: 4, borderRadius: '16px' }}>
              <Typography variant="h6" gutterBottom>
                Personas
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={prevPersonas}>
                  <ArrowBackIosIcon />
                </IconButton>
                {displayedPersonas.map((persona, index) => (
                  <Box key={index} sx={{ mx: 2, textAlign: 'center' }}>
                    <Avatar src={persona.avatar} sx={{ width: 40, height: 50 }} />
                    <Typography>{persona.name}</Typography>
                  </Box>
                ))}
                <IconButton onClick={nextPersonas}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, borderRadius: '16px' }}>
              <Typography variant="h6" gutterBottom>
                Actualización del paro
              </Typography>
              <List>
                {updates.map((update, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={update.author}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {update.time}
                          </Typography>
                          {" — " + update.content}
                        </React.Fragment>
                      }
                    />
                    <IconButton edge="end">
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton edge="end">
                      <BookmarkBorderIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
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
