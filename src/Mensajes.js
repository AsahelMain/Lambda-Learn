import React from 'react';
import { Box, Typography, TextField, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#f0f0f0',
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: '300px',
  backgroundColor: '#f8f8ff',
  padding: theme.spacing(2),
  borderRight: '1px solid #ddd',
}));

const ChatArea = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  backgroundColor: '#e6f7f7',
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
  borderTop: '1px solid #ddd',
  backgroundColor: '#fff',
}));

const ChatApp = () => {
  return (
    <Container>
      <Sidebar>
        <TextField
          variant="outlined"
          placeholder="Buscar chats..."
          fullWidth
          margin="dense"
        />
        <List>
          {['Alexys Gómez', 'Zurisadai Uribe', 'Alan Cruz', 'Emilio Bazán', 'Asahel Main', 'Selene Martínez'].map((name) => (
            <ListItem button key={name}>
              <Avatar>{name.charAt(0)}</Avatar>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Sidebar>
      <ChatArea>
        <Header>
          <Avatar alt="Alan Cruz" src="/static/images/avatar/1.jpg" />
          <Typography variant="h6" style={{ marginLeft: 10 }}>Alan Cruz</Typography>
        </Header>
        <Messages>
          <Message isSender={false}>
            <MessageContent isSender={false}>
              <Typography>¿Necesitas asesorías de estructuras de datos?</Typography>
            </MessageContent>
          </Message>
          <Message isSender={true}>
            <MessageContent isSender={true}>
              <Typography>Sí, definitivamente. ¿Me podrías ayudar?</Typography>
            </MessageContent>
          </Message>
          <Message isSender={false}>
            <MessageContent isSender={false}>
              <Typography>Por supuesto!</Typography>
            </MessageContent>
          </Message>
          <Message isSender={true}>
            <MessageContent isSender={true}>
              <Typography>Muchas gracias Alan</Typography>
            </MessageContent>
          </Message>
        </Messages>
        <MessageInput>
          <TextField
            variant="outlined"
            placeholder="Escribir..."
            fullWidth
            margin="dense"
          />
        </MessageInput>
      </ChatArea>
    </Container>
  );
};

export default ChatApp;
