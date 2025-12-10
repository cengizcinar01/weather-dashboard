import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NavBar} from './components/NavBar.tsx'
import {HomePage} from './pages/HomePage.tsx'
import {FavoritesPage} from './pages/FavoritesPage.tsx'
import {InfoPage} from './pages/InfoPage.tsx'
import {AboutPage} from './pages/AboutPage.tsx'
import {ErrorPage} from "./pages/ErrorPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
                <Route path="/info" element={<InfoPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}