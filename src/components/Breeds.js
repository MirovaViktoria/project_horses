import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Button } from '@mui/material';
import React from 'react';
import { deleteHorses } from '../asyncAction/horses';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Breeds = () => {
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
                            marginTop: 5,
                            borderRadius: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px 10px 0px 10px',
                        }}
                    >
                        <p className='horse_title'>{horse.title}</p>
                        <img
                            className='horses'
                            src={
                                'http://195.133.145.217/Horse/' +
                                horse.id +
                                '/image'
                            }
                            alt=''
                        ></img>
                        <p className='shortDesc_title'>{horse.shortDesc}</p>
                        <p className='fullDesc_title'>{horse.fullDesc}</p>
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

export default Breeds;
