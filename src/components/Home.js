import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Button } from '@mui/material';
import React from 'react';
import { deleteHorses } from '../asyncAction/horses';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
    const horses = useSelector((state) => state.rootReducer.horses.horses);
    const auth = useSelector((state) => state.rootReducer.auth.auth);
    let dispatch = useDispatch();
    // let navigate = useNavigate();

    return (
        <div className='info'>
            <div className='horse.info'>
                {horses.map((horse) => (
                    <div
                        key={horse.id}
                        style={{
                            fontSize: '20px',
                            border: '1px solid black',
                            marginTop: 5,
                            borderRadius: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0px 10px 0px 10px',
                        }}
                    >
                        <img
                            className='horses'
                            src={
                                'http://195.133.145.217/Horse/' +
                                horse.id +
                                '/image'
                            }
                            alt=''
                        ></img>
                        <p>{horse.title}</p>
                        <p>{horse.shortDesc}</p>
                        <p>{horse.fullDesc}</p>
                        <div className='button'>
                            {auth.token !== null && (
                                <Button
                                    variant='outlined'
                                    className='delete'
                                    onClick={() =>
                                        dispatch(
                                            deleteHorses(horse.id, auth.token)
                                        )
                                    }
                                >
                                    Delete
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
