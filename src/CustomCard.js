import React from 'react';
import { Box, Typography, Rating, Chip, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CardContainer = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || 'white',
  borderRadius: '16px',
  padding: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const Header = styled(Box)(({ theme, headerColor }) => ({
  backgroundColor: headerColor || 'rgba(255, 165, 0, 0.3)',
  height: '8px',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
}));

const generateRandomName = () => {
  const firstNames = ['Juan', 'María', 'Carlos', 'Luisa', 'Pedro', 'Ana', 'José', 'Carmen', 'Luis', 'Elena'];
  const lastNames = ['Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz'];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
};



const CustomCard = ({ title, step, rating, bgcolor, headerColor }) => {
  const randomName = generateRandomName();

  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (Math.random() < 0.2) {
      setShow(true);
      setProgress(Math.floor(Math.random() * 100));
    }
  }, []);
  const duration = Math.floor(Math.random() * (50 - 5 + 1)) + 5;

  return (
    <Link to="/modulo/1" style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardContainer bgcolor={bgcolor}>
        <Header headerColor={headerColor} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {step}
          </Typography>
          <Chip label={randomName} sx={{ mt: 1 }} />
          {/* {show && (
            <Box sx={{ mt: 2, width: '100%' }}>
              <Typography variant="body2" color="textSecondary">Progreso del curso</Typography>
              <LinearProgress variant="determinate" value={progress} sx={{ mt: 1, mb: 2 }} />
            </Box>
          )} */}
          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            Duración: {duration} horas
          </Typography>
          <Rating value={rating} precision={0.5} readOnly />
        </Box>
      </CardContainer>
    </Link>
  );
};

export default CustomCard;
