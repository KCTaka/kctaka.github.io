import { Routes, Route } from 'react-router-dom';

import { Header } from './layout/Header';
import Home from 'src/routes/home/Home';
import Contact from 'src/routes/contact/Contact';

function App() {

    return (
        <div className="flex flex-col h-screen">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div >
    );
}

export default App;