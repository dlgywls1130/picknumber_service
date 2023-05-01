import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
        main: '#3ad3de',
        contrastText: '#fff',
      },
    },
  });

function Login(){
    return(
        <div className="login_form"> 
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            로그인
                        </Typography>
                        <TextField id="email"  margin="normal" label="ID" name="email" autoComplete="email" fullWidth autoFocus required/>
                        <TextField id="Password"  margin="normal" label="Password" type="password" name="Password" fullWidth required/>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" label="Remember Me"/>}
                            label="Remember me"
                        />
                        <Button type="submit" color="neutral" size="large" fullWidth variant='contained' sx={{ mt: 3 }}>Sign In</Button>

                        
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default Login