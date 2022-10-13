import { Link } from 'react-router-dom';
import React from 'react';
import { deleteHorses } from '../asyncAction/horses';
import { removeAction } from '../store/authStore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
    const horses = useSelector((state) => state.rootReducer.horses.horses);
    const auth = useSelector((state) => state.rootReducer.auth.auth);
    let dispatch = useDispatch();
    // let navigate = useNavigate();
    const remove = () => {
        dispatch(removeAction(auth.token));
        localStorage.clear('token');
        // navigate('/autorization');
    };
    return (
        <div className='info'>
            <div className='button_control'>
                {/* <div className='autorization'>
                    <Link to='/autorization'>Autorization</Link>
                </div> */}
                {auth.token !== undefined && (
                    <div
                        style={{
                            display: 'none',
                        }}
                    >
                        <Link to='/autorization'>Autorization</Link>
                    </div>
                )}
                {auth.token === undefined && (
                    <div
                        style={{
                            display: 'block',
                        }}
                    >
                        <Link to='/autorization'>Autorization</Link>
                    </div>
                )}
                {auth.token !== undefined && (
                    <div>
                        <Link to='/addHorse'>Add Horse</Link>
                    </div>
                )}
                {auth.token !== undefined && (
                    <button className='logout' onClick={remove}>
                        LogOut
                    </button>
                )}
            </div>
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
                        <div className='button'>
                            {auth.token !== undefined && (
                                <button
                                    className='delete'
                                    onClick={() =>
                                        dispatch(
                                            deleteHorses(horse.id, auth.token)
                                        )
                                    }
                                >
                                    X
                                </button>
                            )}
                        </div>
                        <img
                            className='horses'
                            src={
                                'http://195.133.145.217/Horse/' +
                                horse.id +
                                '/image'
                            }
                            alt=''
                        ></img>
                        <p>{horse.title}.</p>
                        <p>{horse.shortDesc}.</p>
                        <p>{horse.fullDesc}.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
