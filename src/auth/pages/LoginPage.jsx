import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { ConstructionOutlined, Microsoft } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startMicrosoftSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { getAuth } from 'firebase/auth';
import { getEnvVariables } from '../../helpers';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onMicrosoftSignIn = () => {
    dispatch( startMicrosoftSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@gmail.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={ 12 }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                   disabled={ isAuthenticating }
                   variant='contained' 
                   fullWidth
                   onClick={ onMicrosoftSignIn }>
                  <Microsoft />
                  <Typography sx={{ ml: 1 }}>Office 365</Typography>
                </Button>
              </Grid>
            </Grid>

          </Grid>

        </form>

    </AuthLayout>
  )
}