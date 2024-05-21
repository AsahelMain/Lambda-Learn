import React from 'react';
import { Box, Typography, Avatar, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const ProfileContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '900px',
  margin: 'auto',
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const CoverPhoto = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '200px',
  backgroundImage: 'url(https://via.placeholder.com/900x200)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '16px 16px 0 0',
  position: 'relative',
}));

const ProfilePhoto = styled(Avatar)(({ theme }) => ({
  width: '120px',
  height: '120px',
  border: '4px solid #fff',
  position: 'absolute',
  bottom: '-60px',
  left: 'calc(50% - 60px)',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  paddingTop: theme.spacing(4),
  textAlign: 'center',
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const Profile = () => {
  return (
    <ProfileContainer>
      <CoverPhoto>
        <IconButton
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <EditIcon />
        </IconButton>
        <ProfilePhoto src="https://via.placeholder.com/120" />
      </CoverPhoto>
      <InfoContainer>
        <Box>
          <Typography variant="h5">Alan Cruz</Typography>
          <Typography variant="body1">
            Estudiante de octavo semestre de ciencias de la computación.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Acerca de mí</Typography>
          <Typography variant="body2">
            Mi experiencia abarca desde la resolución de problemas complejos con
            algoritmos eficientes hasta el diseño y administración de bases de
            datos robustas. Ofrezco asesorías en varias materias fundamentales
            de la carrera y estoy disponible para resolver dudas.
          </Typography>
        </Box>
      </InfoContainer>
      <Typography variant="h6" align="center" marginTop="20px">Habilidades</Typography>
      <SkillsContainer>
        {['Álgebra', 'Gráficas', 'Análisis de algoritmos', 'Lógica computacional', 'Desarrollo backend', 'EDD', 'ICC'].map((skill) => (
          <Chip key={skill} label={skill} variant="outlined" />
        ))}
      </SkillsContainer>
      <SocialContainer>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
      </SocialContainer>
    </ProfileContainer>
  );
};

export default Profile;
