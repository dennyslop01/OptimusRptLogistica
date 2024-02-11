import { checkingCredentials, logout, login } from './';
import { clientApi } from '../../api';

export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );        
    }
}

export const startMicrosoftSignIn = () => {

    return undefined;

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        try{
            const { data } = await clientApi.post('/auth/login',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login( { data } ));
        } catch ( error ){
            return dispatch( logout( error ) );
        }
    }
}


export const startLogout = () => {
    return async( dispatch ) => {        
        dispatch( logout() );

    }
}
