import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import horse from '../img/icons8-эмодзи-морда-лошади-48.png';
import { removeAction } from '../store/authStore';

// import MenuIcon from '@mui/icons-material/Menu';

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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    {/* <div className='logo'>
                        <div className='new_menu'>
                            <div
                                onClick={() => setNav(!nav)}
                                className='btn_menu'
                            >
                                {nav ? (
                                    <AiOutlineClose size={25} />
                                ) : (
                                    <AiOutlineMenu size={25} />
                                )}
                                <div className='btn'>
                                    {nav ? (
                                        <div
                                            className='btn_close'
                                            style={{
                                                width: '300px',
                                                height: '400px',
                                                padding: '20px 0px 0px 0px',
                                                display: 'flex',
                                                backdropFilter: 'blur(2px)',
                                                flexDirection: 'column',
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                background: 'azure',
                                                position: 'absolute',
                                                zIndex: '10',
                                                borderRadius: '15px',
                                            }}
                                        >
                                            <NavLink to='/'>
                                                <Button
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Главная
                                                </Button>
                                            </NavLink>
                                            <NavLink to='/breeds'>
                                                <Button
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Породы
                                                </Button>
                                            </NavLink>
                                            <NavLink to='/data'>
                                                <Button
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Факты
                                                </Button>
                                            </NavLink>
                                            {auth.token !== null && (
                                                <div
                                                    style={{
                                                        display: 'none',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <NavLink to='/autorization'>
                                                        <Button>
                                                            Авторизация
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            )}
                                            {auth.token === null && (
                                                <div
                                                    style={{
                                                        display: 'block',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <NavLink to='/autorization'>
                                                        <Button>
                                                            Авторизация
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            )}
                                            {auth.token !== null && (
                                                <div
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <NavLink to='/addHorse'>
                                                        <Button>
                                                            Добавить
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            )}
                                            {auth.token !== null && (
                                                <Button
                                                    style={{
                                                        width: '100px',
                                                        cursor: 'pointer',
                                                    }}
                                                    variant='contained'
                                                    onClick={remove}
                                                >
                                                    Выйти
                                                </Button>
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className='btn_close'
                                            style={{
                                                display: 'none',
                                            }}
                                        ></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Toolbar>
                        <NavLink to='/'>
                            <img src={horse} alt=''></img>
                        </NavLink>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <header className='menu'>
                            <NavLink to='/'>
                                <Button
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    Главная
                                </Button>
                            </NavLink>
                            <NavLink to='/breeds'>
                                <Button
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    Породы
                                </Button>
                            </NavLink>
                            <NavLink to='/data'>
                                <Button
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    Факты
                                </Button>
                            </NavLink>
                            {auth.token !== null && (
                                <div
                                    style={{
                                        display: 'none',
                                    }}
                                >
                                    <NavLink to='/autorization'>
                                        <Button
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            Авторизация
                                        </Button>
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
                                        <Button
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            Авторизация
                                        </Button>
                                    </NavLink>
                                </div>
                            )}
                            {auth.token !== null && (
                                <div>
                                    <NavLink to='/addHorse'>
                                        <Button
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            Добавить
                                        </Button>
                                    </NavLink>
                                </div>
                            )}
                            {auth.token !== null && (
                                <Button
                                    style={{
                                        color: 'white',
                                    }}
                                    variant='contained'
                                    onClick={remove}
                                >
                                    Выйти
                                </Button>
                            )}
                        </header>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
};

export default Layout;
