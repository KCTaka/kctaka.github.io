import { Routes, Route } from 'react-router-dom';

import { Header } from './layout/Header';
import Home from 'src/routes/home/Home';
import Contact from 'src/routes/contact/Contact';
import OrigamiPage from './routes/pages/Origami';

function App() {

    return (
        <div className="flex flex-col h-screen">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pages/origami" element={<OrigamiPage />} />
            </Routes>

        </div >
    );
}

export default App;