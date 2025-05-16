import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MoroccanAirportsPage } from './pages/MoroccanAirportsPage';
import { InternationalAirportsPage } from './pages/InternationalAirportsPage';
import { SearchPage } from './pages/SearchPage';
import { AirportDetailPage } from './pages/AirportDetailPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/morocco" element={<MoroccanAirportsPage />} />
            <Route path="/international" element={<InternationalAirportsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/airport/:icao" element={<AirportDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;