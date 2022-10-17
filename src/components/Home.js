import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

// import { NavLink } from 'react-router-dom';

// import klad from '../img/klad1-150x150.jpg';
// import mezen from '../img/meez309.jpg';

const Home = () => {
    return (
        <div className='home'>
            <h1>Этот сайт расскажет вам немного о лошадях.</h1>
            {/* <div className='gallery'>
                <NavLink to='/breeds'>
                    <img className='gallery_img' src={klad} alt=''></img>
                </NavLink>
                <NavLink to='/breeds'>
                    <img className='gallery_img' src={mezen} alt=''></img>
                </NavLink>
            </div> */}
        </div>
    );
};

export default Home;
