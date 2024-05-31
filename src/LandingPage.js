import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Link, useMediaQuery, Modal, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const LandingPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password') {
            MySwal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                handleClose();
                window.location.href = '/progreso'; // Redirigir a otra página
            });
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Credenciales incorrectas',
            });
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        <span style={{ color: '#5C1D9E' }}>Lambda</span>
                        <span style={{ color: '#fff', backgroundColor: '#5C1D9E', padding: '0 5px' }}>Learn</span>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: { xs: '100%', md: 500 }, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                        <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>
                            Acerca De
                        </Link>
                        <Link href="#" sx={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>
                            Registro
                        </Link>
                        <Button variant="outlined" sx={{ color: '#5C1D9E', borderColor: '#5C1D9E', borderWidth: 1 }} onClick={handleOpen}>
                            Ingresar
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={7}>
                    <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }} gutterBottom>
                        Libera tu potencial de desarrollador
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'secondary.main', mb: 2, fontSize: '1.2rem', textAlign: { xs: 'center', md: 'left' } }}>
                        8 de cada 10 alumnos prefieren <b>LambdaLearn</b> para aprender y complementar su aprendizaje.
                    </Typography>
                </Grid>
                {!isMobile && (
                    <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            position: 'absolute',
                            zIndex: -1,
                            right: 0,
                            top: 0
                        }}>
                            <img src="landing.png" alt="Decorative" style={{ maxWidth: '80%', height: 'auto' }} />
                        </Box>
                    </Grid>
                )}
            </Grid>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5C1D9E', color: '#fff', padding: '1rem 0', position: 'absolute', bottom: 0, left: 0 }}>
                <Typography variant="body1">
                    © 2022 RedBlack. Todos los derechos reservados.
                </Typography>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                        Iniciar Sesión
                    </Typography>
                    <TextField
                        fullWidth
                        label="Correo Electrónico"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        fullWidth
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
                        Ingresar
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
};

export default LandingPage;
