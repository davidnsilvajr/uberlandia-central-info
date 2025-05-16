
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
    <header className="bg-uberlandia-green text-white shadow-md">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-uberlandia-yellow rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold">Portal Uberlândia</h1>
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
              className="w-full bg-white text-gray-800 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-uberlandia-yellow"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
