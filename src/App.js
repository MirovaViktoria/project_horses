import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddHorse from './components/AddHorse';
import { Autorization } from './components/Autorization';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='addHorse' element={<AddHorse />} />
                    <Route path='autorization' element={<Autorization />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
