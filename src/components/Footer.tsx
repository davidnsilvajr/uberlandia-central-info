
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-uberlandia-blue text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Prefeitura Municipal de Uberlândia. Todos os direitos reservados.</p>
        <div className="flex justify-center mt-3 space-x-2">
          <div className="w-3 h-3 bg-uberlandia-blue rounded-full border-2 border-white"></div>
          <div className="w-3 h-3 bg-uberlandia-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
