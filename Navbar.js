import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Calculus Duolingo
        </Typography>
        <Box>
          <NavButton component={RouterLink} to="/dashboard">
            Dashboard
          </NavButton>
          <NavButton component={RouterLink} to="/flashcard/1">
            Flashcards
          </NavButton>
          <Avatar
            sx={{
              bgcolor: 'secondary.main',
              marginLeft: 2,
            }}
          >
            U
          </Avatar>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar; 
