import React, { useState } from 'react';
import { Box, Typography, TextField, List, ListItem, ListItemText, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import chroma from 'chroma-js';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '95vh',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#f8f8ff',
  padding: theme.spacing(2),
  borderBottom: '1px solid #ddd',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('md')]: {
    width: '300px',
    borderBottom: 'none',
    borderRight: '1px solid #ddd',
  },
}));

const ChatArea = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  backgroundColor: '#e6f7f7',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('md')]: {
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  },
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: theme.spacing(2),
  borderBottom: '1px solid #ddd',
}));

const Messages = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(2),
  backgroundColor: 'linear-gradient(135deg, #e0e0ff 30%, #e6f7f7 90%)',
}));

const Message = styled(Box)(({ theme, isSender }) => ({
  display: 'flex',
  justifyContent: isSender ? 'flex-end' : 'flex-start',
  marginBottom: theme.spacing(1),
}));

const MessageContent = styled(Box)(({ theme, isSender }) => ({
  maxWidth: '60%',
  padding: theme.spacing(1),
  borderRadius: '10px',
  backgroundColor: isSender ? '#b3a1ff' : '#c1e1ec',
}));

const MessageInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
}));

const getColor = (percentage) => {
  const scale = chroma.scale(['#f44141', '#f4a142', '#f4c542', '#76c7c0']).mode('lch');
  return scale(percentage / 100).hex();
};

const ChatApp = () => {
  const [currentUser, setCurrentUser] = useState('Alan Cruz');
  const [messages, setMessages] = useState({
    'Alexys Gómez': [
      { text: '¡Hola, cómo estás?', isSender: false },
      { text: '¡Bien y tú?', isSender: true }
    ],
    'Zurisadai Uribe': [
      { text: '¿Nos reunimos mañana?', isSender: false },
      { text: 'Claro, ¿a qué hora?', isSender: true }
    ],
    'Alan Cruz': [
      { text: '¿Necesitas asesorías de estructuras de datos?', isSender: false },
      { text: 'Sí, definitivamente. ¿Me podrías ayudar?', isSender: true },
      { text: 'Por supuesto!', isSender: false }
    ],
    'Emilio Bazán': [
      { text: 'Paro de Riemann', isSender: false }
    ],
    'Asahel Main': [
      { text: '¿Tienes tiempo para una asesoría de Cálculo 2?', isSender: false }
    ],
    'Selene Martínez': [
      { text: 'Tengo una idea para el proyecto :D.', isSender: false }
    ],
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUserClick = (name) => {
    setCurrentUser(name);
    if (window.innerWidth < 960) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <Container>
      {isSidebarOpen && (
        <Sidebar>
          <TextField
            variant="outlined"
            placeholder="Buscar chats..."
            fullWidth
            margin="dense"
          />
          <List>
            {Object.keys(messages).map((name) => (
              <ListItem button key={name} onClick={() => handleUserClick(name)}>
                <Avatar style={{ backgroundColor: getColor(name.charCodeAt(0) % 100) }}>
                  {name.charAt(0)}
                </Avatar>
                <ListItemText primary={name} style={{ paddingLeft: 10 }} />
              </ListItem>
            ))}
          </List>
        </Sidebar>
      )}
      <ChatArea>
        <Header>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <Avatar style={{ backgroundColor: getColor(currentUser.charCodeAt(0) % 100) }}>
            {currentUser.charAt(0)}
          </Avatar>
          <Typography variant="h6" style={{ paddingLeft: 10 }}>{currentUser}</Typography>
        </Header>
        <Messages>
          {messages[currentUser].map((message, index) => (
            <Message key={index} isSender={message.isSender}>
              <MessageContent isSender={message.isSender}>
                <Typography>{message.text}</Typography>
              </MessageContent>
            </Message>
          ))}
        </Messages>
        <MessageInput>
          <TextField
            variant="outlined"
            placeholder="Escribir..."
            fullWidth
            margin="dense"
            InputProps={{
              style: { background: 'white' } // Cambia 'blue' al color que desees
            }}
          />
        </MessageInput>
      </ChatArea>
    </Container>
  );
};

export default ChatApp;
