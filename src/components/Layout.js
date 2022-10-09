import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className='menu'>
                <NavLink to='/'>Home</NavLink>
                {/* <NavLink to='/developer'>Developer</NavLink> */}
                {/* <NavLink to='/autorization'>Autorization</NavLink> */}
            </header>

            <Outlet />
        </>
    );
};

export default Layout;
