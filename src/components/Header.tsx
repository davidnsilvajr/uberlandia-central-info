
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className="bg-uberlandia-blue text-white shadow-md">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/7fa2a2c9-8774-47f8-ae93-cf0850606a92.png" 
                alt="Logo Prefeitura de Uberlândia" 
                className="w-16 h-16 object-contain bg-white rounded-lg p-2 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">Diretoria de Compras</h1>
                <p className="text-sm text-gray-100 opacity-90">Prefeitura de Uberlândia</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar recursos..."
              onChange={handleSearchChange}
              className="w-full bg-white/90 backdrop-blur-sm text-gray-800 pl-10 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-uberlandia-yellow shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
