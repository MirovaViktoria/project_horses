import { AlertError } from './Alert';
import { Auth } from '../asyncAction/auth';
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
    );
};
