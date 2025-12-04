import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar.tsx'
import {Home} from './page/Home.tsx'
import {Favorites} from './page/Favorites.tsx'
import {Info} from './page/Info.tsx'
import {About} from './page/About.tsx'
import {Error} from "./page/Error.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}