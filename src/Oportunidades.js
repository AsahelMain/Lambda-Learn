import React, { useState } from 'react';
import { Box, Typography, TextField, Chip, List, ListItem, ListItemText, ListItemIcon, IconButton, Paper, Grid, Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Sidebar = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: '16px',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const MainContent = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: theme.spacing(2),
}));

const SearchContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
}));

const FilterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
}));

const OpportunityItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: '8px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    },
}));
const opportunities = [
    {
        title: "AI Competency Engineering Apprenticeship Programme",
        description: "The NeXus Hub Inc. AI Competency Engineering Apprenticeship Programme is funded by Clinc Inc., an AI company in Ann Arbor, Michigan, USA, ...",
        category: ["Fellowships", "Courses"],
        deadline: "June Oct 18",
        location: "NeXus Hub Inc. AI",
    },
    {
        title: "The Student Program for Innovation in Science and Engineering",
        description: "The Student Program for Innovation in Science and Engineering (SPISE) is being offered by the Caribbean Science Foundation to gifted Caribbean high...",
        category: ["Programs"],
        deadline: "31 March",
        location: "University of Guyana",
    },
    {
        title: "Caribbean Science Foundation’s Computer Coding Workshop",
        description: "Apply for the Caribbean Science Foundation’s Computer Coding Workshop by 22 December 2019 if you’re in Dominica or Barbados and would like to learn ...",
        category: ["Programs", "Workshops"],
        deadline: "Dec 22",
        location: "Dominica/Barbados",
    },
    {
        title: "Machine Learning and Data Science Bootcamp",
        description: "Join the Machine Learning and Data Science Bootcamp to gain hands-on experience in AI technologies. Ideal for students and professionals looking to expand their skills.",
        category: ["Courses", "Workshops"],
        deadline: "July 15",
        location: "Online",
    },
    {
        title: "Global Health Fellowship",
        description: "The Global Health Fellowship offers a unique opportunity to work on public health projects in various countries. Open to graduates in health sciences.",
        category: ["Fellowships", "Graduate programs"],
        deadline: "August 30",
        location: "Various countries",
    },
    {
        title: "Research Internship at the National Institutes of Health",
        description: "Apply for the NIH Research Internship to gain experience in biomedical research. Ideal for undergraduate students pursuing a career in research.",
        category: ["Research Internship", "Undergraduate Internship"],
        deadline: "September 10",
        location: "Bethesda, MD, USA",
    },
    {
        title: "Tech4Good Hackathon",
        description: "Participate in the Tech4Good Hackathon to develop innovative solutions for social impact. Open to students and professionals in tech.",
        category: ["Hackathons", "Workshops"],
        deadline: "November 5",
        location: "San Francisco, CA, USA",
    },
    {
        title: "Sustainable Energy Conference",
        description: "Attend the Sustainable Energy Conference to learn about the latest advancements in renewable energy technologies. Open to students and professionals.",
        category: ["Conferences", "Programs"],
        deadline: "April 20",
        location: "Berlin, Germany",
    },
];

const categories = [
    "Workshops",
    "Programs",
    "Fellowships",
    "Courses",
    "Graduate programs",
    "Undergraduate Internship",
    "Research Internship",
    "Bootcamps",
    "Training Programs",
    "Hackathons",
    "Conferences",
    "Competitions",
    "Scholarships"
];


const SearchAndFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category)
                : [...prevCategories, category]
        );
    };

    const filteredOpportunities = opportunities.filter((opportunity) => {
        const matchesSearchTerm = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategories = selectedCategories.length === 0 || selectedCategories.some((category) => opportunity.category.includes(category));
        return matchesSearchTerm && matchesCategories;
    });

    return (
        <Box>
            <MuiContainer maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
                    Oportunidades
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Sidebar>
                            <Typography variant="h6" gutterBottom>
                                Buscar
                            </Typography>
                            <SearchContainer>
                                <TextField
                                    variant="outlined"
                                    placeholder="Buscar..."
                                    fullWidth
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </SearchContainer>
                            <Typography variant="h6" gutterBottom>
                                Filtrar por categorías
                            </Typography>
                            <FilterContainer>
                                {categories.map((category) => (
                                    <Chip
                                        key={category}
                                        label={category}
                                        clickable
                                        color={selectedCategories.includes(category) ? 'primary' : 'default'}
                                        onClick={() => handleCategoryClick(category)}
                                    />
                                ))}
                            </FilterContainer>
                        </Sidebar>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <MainContent>
                            <Typography variant="h6" gutterBottom>
                                Basado en tu perfil
                            </Typography>
                            <List>
                                {filteredOpportunities.map((opportunity, index) => (
                                    <OpportunityItem key={index}>
                                        <Box>
                                            <Typography variant="h6">{opportunity.title}</Typography>
                                            <Typography variant="body2">{opportunity.description}</Typography>
                                            <Box sx={{ mt: 1 }}>
                                                {opportunity.category.map((cat) => (
                                                    <Chip key={cat} label={cat} sx={{ mr: 1, mb: 1 }} />
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                                                <CalendarTodayIcon fontSize="small" />
                                                <Typography variant="body2" sx={{ ml: 1 }}>{opportunity.deadline}</Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <LocationOnIcon fontSize="small" />
                                                <Typography variant="body2" sx={{ ml: 1 }}>{opportunity.location}</Typography>
                                            </Box>
                                            <IconButton>
                                                <StarBorderIcon />
                                            </IconButton>
                                        </Box>
                                    </OpportunityItem>
                                ))}
                            </List>
                        </MainContent>
                    </Grid>
                </Grid>
            </MuiContainer>
        </Box>
    );
};

export default SearchAndFilter;
