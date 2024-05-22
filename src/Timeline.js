import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import chroma from 'chroma-js';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  height: '400px',
  overflowY: 'auto',
  padding: theme.spacing(2),
  borderRadius: '16px',
}));

const StepContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
}));

const StepContent = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const Line = styled('line')({
  stroke: '#ddd',
  strokeWidth: 2,
  fill: 'none',
});


const getColor = (percentage) => {
  const scale = chroma.scale(['#f44141', '#f4a142', '#f4c542', '#76c7c0']).mode('lch');
  return scale(percentage / 100).hex();
};

const generateVerticalSinusoidalPositions = (numSteps, amplitude, frequency) => {
  const positions = [];
  const stepHeight = 100 / numSteps;

  for (let i = 0; i < numSteps; i++) {
    const y = stepHeight * i + stepHeight / 2;
    const x = 50 + amplitude * Math.sin(frequency * y * (Math.PI / 180));
    positions.push({ left: `${x}%`, top: `${y}%` });
  }

  return positions;
};

const Timeline = ({ steps }) => {
  const positions = generateVerticalSinusoidalPositions(steps.length, 20, 4);

  return (
    <TimelineContainer>
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        {positions.map((pos, index) => {
          if (index === positions.length - 1) return null;
          const nextPos = positions[index + 1];
          return (
            <Line
              key={index}
              x1={`${parseFloat(pos.left)}%`}
              y1={`${parseFloat(pos.top)}%`}
              x2={`${parseFloat(nextPos.left)}%`}
              y2={`${parseFloat(nextPos.top)}%`}
            />
          );
        })}
      </svg>
      {steps.map((step, index) => (
        <StepContainer key={index} style={positions[index]}>
          <StepContent color={getColor(step.percentage)}>
            <Typography variant="caption">{step.percentage}%</Typography>
          </StepContent>
          <Typography variant="body2" sx={{ mt: 1 }}>{step.name}</Typography>
        </StepContainer>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
