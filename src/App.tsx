import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CampaignSetup from './pages/CampaignSetup';
import MediaPlanning from './pages/MediaPlanning';
import BroadcasterPortal from './pages/BroadcasterPortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center py-8">Media Vault is loading...</h1>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaign-setup" element={<CampaignSetup />} />
            <Route path="/media-planning" element={<MediaPlanning />} />
            <Route path="/broadcaster-portal" element={<BroadcasterPortal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;