import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from "axios";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#166094',
      contrastText: '#fff',
    },
  },
});

function LoginForm() {
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setLoginID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://service-api.landpick.net/user/login", {
        loginID,
        loginPassword,
      });
      console.log(response.data);
      setLoggedIn(true);
      navigate('/navbar');
    } catch (error) {
      console.error(error);
    }
  };

  const pageTitle = '순번관리시스템-서비스';

  return (

    <form className="login_form">
      <Header title={pageTitle} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{                            
          position:'absolute',
          top:'45%',
          left:'50%',
          transform:'translate(-50%,-50%)',}}>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
            <TextField id="ID" margin="normal" label="ID" name="ID" autoComplete="ID" fullWidth autoFocus required value={loginID} onChange={handleUsernameChange}/>
            <TextField id="Password" margin="normal" label="Password" type="password" name="password" autoComplete="current-password" fullWidth required value={loginPassword} onChange={handlePasswordChange}/>
            <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
              로그인
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </form>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/navbar/*" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;