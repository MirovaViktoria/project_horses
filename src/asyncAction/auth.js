import { authAction } from '../store/authStore';
import { authError } from '../store/authStore';

const url = 'http://195.133.145.217/Auth/';

export const Auth = (navigate, login, password) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                // Authentication: 'Bearer Token',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.text();
            })

            .then((token) => {
                localStorage.setItem('token', token);
                dispatch(authAction(token));
                navigate('/');
            })
            .catch((error) => {
                dispatch(authError(error));
                //alert('Wrong passwrod!');
            });
    };
};

export const logOut = (login, password) => {
    return function (dispatch) {
        Auth(login, password).then((json) => {
            if (json.token) {
                localStorage.remove('token');
                dispatch({
                    type: 'REMOVE',
                    payload: json,
                });
            } else {
                console.log(json.error);
            }
        });
    };
};
