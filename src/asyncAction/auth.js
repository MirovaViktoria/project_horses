import { authAction } from '../store/authStore';

const url = 'http://195.133.145.217/Auth/';

export const Auth = (navigate, login, password) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                // Authentication: 'Bearer Token',
                'Content-Type': 'application/json',
                token: localStorage.getItem('token'),
            },
            body: JSON.stringify({ login, password }),
        })
            .then((respose) => respose.text())
            .then((token) => {
                dispatch(authAction(token));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
export const loginUser = (login, password) => {
    return function (dispatch) {
        Auth(login, password).then((json) => {
            if (json.token) {
                localStorage.setItem('token', json.token);
                dispatch({
                    type: 'AUTH',
                    payload: json,
                });
            } else {
                console.log(json.error);
            }
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
