import React from 'react';
import { Box, Typography, TextField, Chip, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
    padding: theme.spacing(2),
}));

const Sidebar = styled(Box)(({ theme }) => ({
    width: '300px',
    backgroundColor: '#f5f5f5',
    borderRadius: '16px',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const MainContent = styled(Box)(({ theme }) => ({
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
];

const categories = [
    "Workshops",
    "Programs",
    "Fellowships",
    "Courses",
    "Graduate programs",
    "Undergraduate Internship",
    "Research Internship",
];

const SearchAndFilter = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ pb: 5 }}>
                    Oportunidades
                </Typography>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
            
                
                <Container>

                    <Sidebar>


                        <Typography variant="h6" gutterBottom>
                            Search
                        </Typography>
                        <SearchContainer>
                            <TextField variant="outlined" placeholder="Search..." fullWidth />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </SearchContainer>
                        <Typography variant="h6" gutterBottom>
                            Filter by categories
                        </Typography>
                        <FilterContainer>
                            {categories.map((category) => (
                                <Chip key={category} label={category} clickable />
                            ))}
                        </FilterContainer>
                    </Sidebar>
                    <MainContent>
                        <Typography variant="h6" gutterBottom>
                            Based on your profile
                        </Typography>
                        <List>
                            {opportunities.map((opportunity, index) => (
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
                </Container>
            </Container>
        </Box>
    );
};

export default SearchAndFilter;
