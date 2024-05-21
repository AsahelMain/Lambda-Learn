import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || 'white',
  borderRadius: '16px',
  padding: theme.spacing(2),
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden'
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

const CustomCard = ({ title, step, rating, bgcolor, headerColor }) => {
  return (
    <CardContainer bgcolor={bgcolor}>
      <Header headerColor={headerColor} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Paso {step}
      </Typography>
      <Rating value={rating} precision={0.5} readOnly />
    </CardContainer>
  );
};

export default CustomCard;
