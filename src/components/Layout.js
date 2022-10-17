import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { removeAction } from '../store/authStore';

const Layout = () => {
    const auth = useSelector((state) => state.rootReducer.auth.auth);
    let dispatch = useDispatch();
    const remove = () => {
        dispatch(removeAction(auth.token));
        localStorage.clear('token');
    };

    return (
        <>
            <header className='menu'>
                <NavLink to='/'>
                    <Button>Главная</Button>
                </NavLink>
                <NavLink to='/breeds'>
                    <Button>Породы</Button>
                </NavLink>
                <NavLink to='/data'>
                    <Button>Факты</Button>
                </NavLink>
                {auth.token !== null && (
                    <div
                        style={{
                            display: 'none',
                        }}
                    >
                        <NavLink to='/autorization'>
                            <Button>Авторизация</Button>
                        </NavLink>
                    </div>
                )}
                {auth.token === null && (
                    <div
                        style={{
                            display: 'block',
                        }}
                    >
                        <NavLink to='/autorization'>
                            <Button>Авторизация</Button>
                        </NavLink>
                    </div>
                )}
                {auth.token !== null && (
                    <div>
                        <NavLink to='/addHorse'>
                            <Button>Добавить</Button>
                        </NavLink>
                    </div>
                )}
                {auth.token !== null && (
                    <Button variant='contained' onClick={remove}>
                        Выйти
                    </Button>
                )}
            </header>

            <Outlet />
        </>
    );
};

export default Layout;
