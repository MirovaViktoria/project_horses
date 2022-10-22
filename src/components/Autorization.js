import { AlertError } from './Alert';
import { Auth } from '../asyncAction/auth';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
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
                    <div className='auth_button'>
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
        </form>
    );
};
