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
            <h1 className='title'>
                Этот сайт расскажет вам немного о лошадях.
            </h1>
            <p className='about_horses'>
                Лошади — это непарнокопытные животные из семейства лошадиных. В
                дикой природе их почти не осталось, единственный истинный
                представитель диких лошадей — конь Пржевальского. Остальные
                разновидности, те, что живут в естественных условиях, являются
                одичавшими формами домашних коней. Люди одомашнили этих животных
                около 6000 лет назад, и многие столетия они играли важную
                хозяйственную роль.
            </p>
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
