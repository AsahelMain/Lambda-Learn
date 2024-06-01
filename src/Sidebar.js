import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProgressIcon from '@mui/icons-material/TrendingUp';
import ModulesIcon from '@mui/icons-material/ViewModule';
import ForumIcon from '@mui/icons-material/Forum';
import OpportunitiesIcon from '@mui/icons-material/WorkOutline';
import MessagesIcon from '@mui/icons-material/Message';
import ProfileIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawerContent = (
        <Box sx={{ width: 250, bgcolor: '#2D0353', color: 'white', height: '96.5vh', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                    <img src="logo.png" alt="LambdaLearn Logo" style={{ width: 100, height: 100, marginBottom: 16, marginTop: 16 }} />
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Lambda<span style={{ backgroundColor: 'white', color: '#2D0353', padding: '0 4px' }}>Learn</span>
                    </Typography>
                </Box>
                <List>
                    <ListItem button component={NavLink} to="/progreso" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' }, mb: 1 }}>
                        <ListItemIcon>
                            <ProgressIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Progreso" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/modulos" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <ModulesIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Modulos" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/foro" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <ForumIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Foro" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/oportunidades" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <OpportunitiesIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Oportunidades" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/mensajes" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <MessagesIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Mensajes" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/perfil" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <ProfileIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Perfil" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/configuracion" activeClassName="selected" sx={{ '&.selected': { bgcolor: '#3A0B6C' } }}>
                        <ListItemIcon>
                            <SettingsIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Configuracion" />
                    </ListItem>
                </List>
            </Box>
            <Box sx={{ mt: 'auto' }}>
                <ListItem button component={NavLink} to="/" sx={{ mt: 1 }}>
                    <ListItemIcon>
                        <LogoutIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesion" />
                </ListItem>
            </Box>
        </Box>
    );

    return (
        <Box>
            {isMobile ? (
                <Box sx={{ position:"absolute"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,padding:1,margin:0}}>
                        <MenuIcon />
                    </IconButton>

                </Box>
            ) : (
                <Box>{drawerContent}</Box>
            )}
            <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
