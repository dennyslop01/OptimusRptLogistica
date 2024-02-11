import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { IncidenciaRoutes } from '../incidencias/routes/IncidenciaRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>
        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <IncidenciaRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

    </Routes>
  )
}