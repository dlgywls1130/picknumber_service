import React from "react";
import './App.css'


import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Header from './components/Header';
import Button from '@mui/material/Button';

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

function App() {
  
  return (
    <div>

      <div className="login_form"> 
        <Header></Header>
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
                      <TextField id="ID"  margin="normal" label="ID" name="ID" autoComplete="ID" fullWidth autoFocus required/>
                      <TextField id="Password" margin="normal" label="Password" type="password" name="Password" fullWidth required/>
                      {/* <Button color="neutral" size="large" fullWidth variant='contained' sx={{ mt: 3 }} >Sign In</Button> */}
                      <Link href="#Navbar">Sign In</Link>
                      
                  </Box>
              </Container>
          </ThemeProvider> 
      </div>


    </div>
  );
}

export default App