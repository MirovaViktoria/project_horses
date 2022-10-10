import { NavLink, Outlet } from 'react-router-dom';

// import images from '../img/images.png';

const Layout = () => {
    return (
        <>
            <header className='menu'>
                <NavLink to='/'>
                    {/* <img className='bee' src={images} alt=''></img> */}
                    Home
                </NavLink>
                {/* <NavLink to='/developer'>Developer</NavLink> */}
                {/* <NavLink to='/autorization'>Autorization</NavLink> */}
            </header>

            <Outlet />
        </>
    );
};

export default Layout;
