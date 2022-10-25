import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import horse from '../img/icons8-эмодзи-морда-лошади-48.png';
import { removeAction } from '../store/authStore';

const Layout = () => {
    const auth = useSelector((state) => state.rootReducer.auth.auth);
    let dispatch = useDispatch();
    const remove = () => {
        dispatch(removeAction(auth.token));
        localStorage.clear('token');
    };
    const [nav, setNav] = useState(false);
    return (
        <>
            <div className='logo'>
                <div>
                    <NavLink to='/'>
                        <img src={horse} alt=''></img>
                    </NavLink>
                </div>
                <div className='new_menu'>
                    <div onClick={() => setNav(!nav)} className='btn_menu'>
                        {nav ? (
                            <AiOutlineClose size={25} />
                        ) : (
                            <AiOutlineMenu size={25} />
                        )}
                    </div>
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
                </div>
            </div>

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
