import { AlertError } from './Alert';
import { Auth } from '../asyncAction/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import { Button } from '@mui/material';
// import { TextField } from '@mui/material';

export const Autorization = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(Auth(navigate, login, password));
    }
    return (
        <div className='entry-content'>
            <div className='login'>
                <h1>Введите логин и пароль</h1>
                <form
                    name='autorize'
                    method='post'
                    action=''
                    onSubmit={handleSubmit}
                >
                    <AlertError></AlertError>
                    <p>
                        <input
                            type='text'
                            name='login'
                            required=''
                            placeholder='Логин'
                            onChange={(e) => setLogin(e.target.value)}
                        ></input>
                    </p>
                    <p>
                        <input
                            type='password'
                            name='password'
                            required=''
                            placeholder='Пароль'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </p>
                    <p className='submit'>
                        <input
                            type='submit'
                            name='commit'
                            value='Войти'
                        ></input>
                    </p>
                </form>
            </div>

            <div className='clearfix'></div>
        </div>
        /* <form onSubmit={handleSubmit}>
            <AlertError></AlertError>
            <div className='auth'>
                <div className='autorization'>
                    <div className='login'>
                        <TextField
                            type='text'
                            required
                            id='Login'
                            label='Login'
                            multiline
                            maxRows={2}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className='password'>
                        <TextField
                            type='password'
                            required
                            id='Password'
                            label='Password'
                            multiline
                            maxRows={2}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <Button
                            className='submit'
                            type='submit'
                            variant='contained'
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </form> */
    );
};
