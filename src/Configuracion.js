import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Collapse, Switch, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import StyleIcon from '@mui/icons-material/Style';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';

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

const settingsOptions = [
  {
    title: 'Cambiar correo',
    icon: <EmailIcon />,
    component: (
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Correo actual" fullWidth margin="normal" />
        <TextField label="Nuevo correo" fullWidth margin="normal" />
        <Button variant="contained" color="primary">Guardar</Button>
      </Box>
    ),
  },
  {
    title: 'Cambiar contraseña',
    icon: <LockIcon />,
    component: (
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Contraseña actual" type="password" fullWidth margin="normal" />
        <TextField label="Nueva contraseña" type="password" fullWidth margin="normal" />
        <TextField label="Confirmar nueva contraseña" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary">Guardar</Button>
      </Box>
    ),
  },
  {
    title: 'Tamaño de letra',
    icon: <FontDownloadIcon />,
    component: (
      <Box>
        <Typography variant="body2">Seleccione el tamaño de la letra:</Typography>
        <Switch defaultChecked />
      </Box>
    ),
  },
  {
    title: 'Estilo',
    icon: <StyleIcon />,
    component: (
      <Box>
        <Typography variant="body2">Opciones de estilo aquí</Typography>
        <Button variant="contained" color="primary">Aplicar</Button>
      </Box>
    ),
  },
  {
    title: 'Desactivar cuenta',
    icon: <DeleteIcon />,
    component: (
      <Box>
        <Typography variant="body2" color="error">Advertencia: Esta acción es irreversible.</Typography>
        <Button variant="contained" color="secondary">Desactivar cuenta</Button>
      </Box>
    ),
  },
  {
    title: 'Notificaciones',
    icon: <NotificationsIcon />,
    component: (
      <Box>
        <Typography variant="body2">Configurar notificaciones:</Typography>
        <Switch defaultChecked />
      </Box>
    ),
  },
  {
    title: 'Seguridad',
    icon: <SecurityIcon />,
    component: (
      <Box>
        <Typography variant="body2">Recordarme en esta computadora:</Typography>
        <Switch defaultChecked />
      </Box>
    ),
  },
];

const Settings = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Container>
      <Header>
        <Typography variant="h5">Configuración</Typography>
        <AccountCircleIcon fontSize="large" />
      </Header>
      <SettingsList>
        {settingsOptions.map((option, index) => (
          <Box key={option.title}>
            <SettingsItem button onClick={() => handleClick(index)}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.title} />
              <ListItemIcon>
                <IconButton edge="end">
                  {open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </ListItemIcon>
            </SettingsItem>
            <Collapse in={open === index} timeout="auto" unmountOnExit>
              <Box padding={2}>{option.component}</Box>
            </Collapse>
          </Box>
        ))}
      </SettingsList>
    </Container>
  );
};

export default Settings;
