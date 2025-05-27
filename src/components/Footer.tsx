
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-uberlandia-blue text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">© {currentYear} Prefeitura Municipal de Uberlândia - Diretoria de Compras</p>
        <p className="text-sm opacity-80 mt-1">Todos os direitos reservados.</p>
        <div className="flex justify-center mt-4 space-x-3">
          <div className="w-4 h-4 bg-uberlandia-blue rounded-full border-2 border-white shadow-sm"></div>
          <div className="w-4 h-4 bg-uberlandia-yellow rounded-full shadow-sm"></div>
          <div className="w-4 h-4 bg-uberlandia-green rounded-full shadow-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
