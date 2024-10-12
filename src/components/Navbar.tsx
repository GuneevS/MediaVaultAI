import React from 'react';
import { Link } from 'react-router-dom';
import { TvIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <TvIcon size={24} />
          <span className="font-bold text-xl">Media Vault</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/campaign-setup" className="hover:text-blue-200">Campaign Setup</Link>
          <Link to="/media-planning" className="hover:text-blue-200">Media Planning</Link>
          <Link to="/broadcaster-portal" className="hover:text-blue-200">Broadcaster Portal</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;