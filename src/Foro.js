import React from 'react';
import { Box, Typography, TextField, List, ListItem, ListItemText, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    height: '100vh',
}));

const Header = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const SearchContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const TopicsContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const topics = [
    { title: "¿Cómo aprender React?", author: "Carlos Pérez", replies: 12 },
    { title: "Mejores prácticas en CSS", author: "Ana Gómez", replies: 8 },
    { title: "Cómo mejorar en JavaScript", author: "Luis Hernández", replies: 15 },
    { title: "Consejos para entrevistas técnicas", author: "María López", replies: 10 },
];

const Forum = () => {
    return (
        <Box>
            <Container maxWidth="lg" sx={{ mt: 4 }} >
                <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
                    Foro
                </Typography>
                <SearchContainer>
                    <TextField variant="outlined" placeholder="Buscar..." fullWidth />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </SearchContainer>
                <Box display="flex" gap={2}>
                    <TopicsContainer>
                        <Typography variant="h6">Temas Recientes</Typography>
                        <List>
                            {topics.map((topic, index) => (
                                <ListItem button key={index}>
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
                    </TopicsContainer>
                    <ProfileContainer>
                        <Typography variant="h6">Perfil</Typography>
                        <Box display="flex" alignItems="center" gap={2} mt={2}>
                            <Avatar src="https://via.placeholder.com/150" />
                            <Box>
                                <Typography variant="body1">Alan Cruz</Typography>
                                <Typography variant="body2" color="textSecondary">Miembro desde: Enero 2023</Typography>
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <Typography variant="body1">Publicaciones: 34</Typography>
                            <Typography variant="body1">Reputación: 120</Typography>
                        </Box>
                    </ProfileContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default Forum;
