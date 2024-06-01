import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Link, useMediaQuery, TextField, MenuItem } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Modal } from '@mui/material';

const MySwal = withReactContent(Swal);

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [showAbout, setShowAbout] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const handleShowAbout = () => setShowAbout(true);
    const handleHideAbout = () => setShowAbout(false);
    const handleRegister = () => setRegister(true);

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password') {
            MySwal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                handleCloseLogin();
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
            {register ? (
                <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{ height: '100vh', width: '100%', position: 'absolute', left: 0, top: 0 }}>
                    <Grid item xs={12} md={5} sx={{ backgroundColor: '#2E0E58', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            ¡Bienvenido!
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Lambda <span style={{ color: '#5C1D9E' }}>Learn</span>
                            aqui va una imagen
                            

                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Crear una cuenta
                        </Typography>
                        <TextField
                            fullWidth
                            label="Nombre"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Apellido"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Carrera"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Número de Cuenta"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            select
                            label="Intereses"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        >
                            <MenuItem value="programación">Programación</MenuItem>
                            <MenuItem value="matemáticas">Matemáticas</MenuItem>
                            <MenuItem value="ciencia">Ciencia</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            select
                            label="Mi rol"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: isMobile ? '0.8rem' : '1rem', mb: 2 }}
                        >
                            <MenuItem value="estudiante">Estudiante</MenuItem>
                            <MenuItem value="profesor">Profesor</MenuItem>
                        </TextField>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, width: '100%' }}>
                            <Button variant="outlined" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', color: '#5C1D9E', borderColor: '#5C1D9E' }} onClick={() => setRegister(false)}>
                                Cancelar
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ fontSize: isMobile ? '0.8rem' : '1rem', backgroundColor: '#5C1D9E', color: '#fff', display: 'inline' }}
                                onClick={() => {
                                    Swal.fire(
                                        '¡Registrado!',
                                        'Te has registrado con éxito.',
                                        'success'
                                    )
                                }}
                            >Confirmar</Button>
                        </Box>
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Box sx={{ mb: 10 }}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: isMobile ? '1.5rem' : '2rem' }} >
                                <span style={{ color: '#5C1D9E' }}>Lambda</span>
                                <span style={{ color: '#fff', backgroundColor: '#5C1D9E', padding: '0 5px' }}>Learn</span>
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: { xs: '100%', md: 500 }, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                                <Link href="#" onClick={handleShowAbout} sx={{ color: '#333', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                                    Acerca De
                                </Link>
                                <Link href="#" onClick={handleRegister} sx={{ color: '#333', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                                    Registro
                                </Link>

                                <Button variant="outlined" sx={{ color: '#5C1D9E', borderColor: '#5C1D9E', borderWidth: 1, fontSize: isMobile ? '0.8rem' : '1rem' }} onClick={handleOpenLogin}>
                                    Ingresar
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    {showAbout ? (
                        <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
                            <Grid item xs={12} md={7}>
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Acerca de la plataforma
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, mt: 10, textAlign: 'justify' }}>
                                    Nuestra aplicación, <b>Lambda Learn</b>, está diseñada para los estudiantes que cursan la carrera de Ciencias de la Computación en la Facultad de Ciencias. Lo que la hace especial es que se ofrece como una herramienta colaborativa que reúne recursos educativos, conexiones estudiantiles y apoyo personalizado en un solo lugar, de forma que los estudiantes pueden ir viendo sus progresos y constancias.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="lambda_logo.png" alt="Lambda Learn Logo" style={{ maxWidth: '80%', height: 'auto' }} />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} md={7}>
                                <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' }, fontSize: isMobile ? '2rem' : '3rem' }} gutterBottom>
                                    Libera tu potencial de desarrollador
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'secondary.main', mb: 2, fontSize: isMobile ? '1rem' : '1.2rem', textAlign: { xs: 'center', md: 'left' } }}>
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
                    )}
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5C1D9E', color: '#fff', padding: '1rem 0', position: 'absolute', bottom: 0, left: 0 }}>
                        <Typography variant="body1" sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}>
                            © 2024 RedBlack. Todos los derechos reservados.
                        </Typography>
                    </Box>
                    <Modal open={openLogin} onClose={handleCloseLogin}>
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                            <Typography variant="h6" component="h2" sx={{ mb: 2, fontSize: isMobile ? '1rem' : '1.5rem' }}>
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
                                sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}
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
                                sx={{ fontSize: isMobile ? '0.8rem' : '1rem' }}
                            />
                            <Button variant="contained" sx={{ mt: 2, fontSize: isMobile ? '0.8rem' : '1rem' }} onClick={handleLogin}>
                                Ingresar
                            </Button>
                        </Box>
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default HomePage;
