import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import Flashcard from './pages/Flashcard';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#58a700', // Duolingo green
    },
    secondary: {
      main: '#ffd900', // Duolingo yellow
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/flashcard/:id" element={<Flashcard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
