import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  margin: 'auto',
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: '1px solid #ddd',
}));

const SettingsList = styled(List)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(2),
}));

const SettingsItem = styled(ListItem)(({ theme }) => ({
  borderBottom: '1px solid #ddd',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const Settings = () => {
  const settingsOptions = [
    'Cambiar correo',
    'Cambiar contraseña',
    'Tamaño de letra',
    'Estilo',
    'Desactivar cuenta',
  ];

  return (
    <Container>
      <Header>
        <Typography variant="h5">Configuración</Typography>
        <AccountCircleIcon fontSize="large" />
      </Header>
      <SettingsList>
        {settingsOptions.map((option) => (
          <SettingsItem key={option}>
            <ListItemText primary={option} />
            <ListItemIcon>
              <IconButton edge="end">
                <ExpandMoreIcon />
              </IconButton>
            </ListItemIcon>
          </SettingsItem>
        ))}
      </SettingsList>
    </Container>
  );
};

export default Settings;
