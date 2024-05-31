import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Container as MuiContainer, Stepper, Step, StepLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Chart } from 'react-google-charts';

const VideoContent1 = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '515px', backgroundColor: '#f5f5f5' }}>
        <iframe width="800" height="515" src="https://www.youtube.com/embed/tmHXGbro8NY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Box>
);

const VideoContent2 = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '515px', backgroundColor: '#f5f5f5' }}>
        <iframe width="800" height="315" src="https://www.youtube.com/embed/cZaNf2rA30k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Box>
);

const FormContent = ({ setAnswers }) => {
    const [formValues, setFormValues] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setAnswers(formValues);
    };

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Pregunta 1: ¿Qué es Google Cloud?</FormLabel>
                <RadioGroup name="question1" value={formValues.question1} onChange={handleChange}>
                    <FormControlLabel value="a" control={<Radio />} label="Una plataforma de juegos" />
                    <FormControlLabel value="b" control={<Radio />} label="Una plataforma de servicios en la nube" />
                    <FormControlLabel value="c" control={<Radio />} label="Un sistema operativo" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Pregunta 2: ¿Qué es Machine Learning?</FormLabel>
                <RadioGroup name="question2" value={formValues.question2} onChange={handleChange}>
                    <FormControlLabel value="a" control={<Radio />} label="Una técnica de inteligencia artificial" />
                    <FormControlLabel value="b" control={<Radio />} label="Una herramienta de software" />
                    <FormControlLabel value="c" control={<Radio />} label="Un lenguaje de programación" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Pregunta 3: Describe una aplicación de Machine Learning</FormLabel>
                <TextField name="question3" value={formValues.question3} onChange={handleChange} variant="outlined" />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Pregunta 4: ¿Cuál es tu conocimiento previo en Machine Learning?</FormLabel>
                <TextField name="question4" value={formValues.question4} onChange={handleChange} variant="outlined" />
            </FormControl>
            <Button variant="contained" color="primary" type="submit">Enviar</Button>
        </Box>
    );
};

const EmbeddedPageContent1 = () => (
    <iframe title="Embedded Page 1" src="https://karpathy.github.io/2019/04/25/recipe/" style={{ width: '100%', height: '315px', border: 'none' }} />
);

const EmbeddedPageContent2 = () => (
    <iframe title="Embedded Page 2" src="https://karpathy.github.io/2022/03/14/lecun1989/" style={{ width: '100%', height: '315px', border: 'none' }} />
);

const CompletionContent = ({ answers }) => {
    const correctAnswers = {
        question1: 'b',
        question2: 'a',
    };

    const getScore = () => {
        let score = 0;
        if (answers.question1 === correctAnswers.question1) score++;
        if (answers.question2 === correctAnswers.question2) score++;
        return score;
    };

    const score = getScore();
    const totalQuestions = Object.keys(correctAnswers).length;

    const data = [
        ['Pregunta', 'Correcto', 'Incorrecto'],
        ['Pregunta 1', answers.question1 === correctAnswers.question1 ? 1 : 0, answers.question1 !== correctAnswers.question1 ? 1 : 0],
        ['Pregunta 2', answers.question2 === correctAnswers.question2 ? 1 : 0, answers.question2 !== correctAnswers.question2 ? 1 : 0],
    ];

    const options = {
        title: 'Estadísticas de tus respuestas',
        hAxis: { title: 'Preguntas' },
        vAxis: { title: 'Cantidad' },
        chartArea: { width: '50%' },
        isStacked: true,
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '315px', backgroundColor: '#f5f5f5', p: 3 }}>
            <Typography variant="h5">¡Has completado todos los módulos!</Typography>
            <Typography variant="h6">Puntaje: {score} de {totalQuestions}</Typography>
            <Chart chartType="ColumnChart" width="100%" height="300px" data={data} options={options} />
        </Box>
    );
};

const steps = [
    { label: 'Video Introductorio', content: <VideoContent1 /> },
    { label: 'Formulario de Test', content: (setAnswers) => <FormContent setAnswers={setAnswers} /> },
    { label: 'Página Web Embebida 1', content: <EmbeddedPageContent1 /> },
    { label: 'Video Adicional', content: <VideoContent2 /> },
    { label: 'Página Web Embebida 2', content: <EmbeddedPageContent2 /> },
    { label: 'Finalizar', content: (answers) => <CompletionContent answers={answers} /> },
];

const ModuleStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        //checa si es el ultimo paso
        if (activeStep === steps.length - 1) {
            //si es el ultimo paso, reinicia
            setActiveStep(0);
            setAnswers({});
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <MuiContainer maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
                Módulo Seleccionado
            </Typography>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '16px' }}>
                <Stepper activeStep={activeStep} orientation="horizontal">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                StepIconComponent={() =>
                                    activeStep > index ? <CheckCircleIcon color="primary" /> : <div>{index + 1}</div>
                                }
                            >
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ mt: 4 }}>
                    {typeof steps[activeStep].content === 'function' ? steps[activeStep].content(setAnswers, answers) : steps[activeStep].content}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Atrás
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ ml: 1 }}
                    >
                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                </Box>
            </Paper>
        </MuiContainer>
    );
};

export default ModuleStepper;
