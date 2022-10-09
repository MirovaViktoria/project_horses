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
        <form onSubmit={handleSubmit}>
            <div className='auth'>
                <div>
                    <div>
                        <h1>Login</h1>
                        <input
                            type='text'
                            onChange={(e) => setLogin(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <h1>Password</h1>
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <button className='submit' type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};
