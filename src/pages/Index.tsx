
import React, { useState } from 'react';
import Header from '../components/Header';
import ResourceSection from '../components/ResourceSection';
import Footer from '../components/Footer';
import { ResourceItem } from '../components/ResourceCard';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - you can replace this with your actual resources
  const allResources: Record<string, ResourceItem[]> = {
    'Planilhas': [
      { id: '1', title: 'Orçamento 2025', type: 'spreadsheet', link: '#', description: 'Planilha de orçamento anual' },
      { id: '2', title: 'Relatório Mensal', type: 'spreadsheet', link: '#', description: 'Relatório de atividades mensais' },
      { id: '3', title: 'Controle de Projetos', type: 'spreadsheet', link: '#', description: 'Acompanhamento de projetos' },
      { id: '4', title: 'Inventário', type: 'spreadsheet', link: '#', description: 'Lista de inventário atualizada' },
    ],
    'Pastas e Documentos': [
      { id: '5', title: 'Documentos Importantes', type: 'folder', link: '#', description: 'Pasta com documentos essenciais' },
      { id: '6', title: 'Manuais', type: 'folder', link: '#', description: 'Manuais e guias técnicos' },
      { id: '7', title: 'Legislação', type: 'folder', link: '#', description: 'Leis e regulamentos' },
      { id: '8', title: 'Arquivos de Projetos', type: 'folder', link: '#', description: 'Projetos em andamento e finalizados' },
    ],
    'Telefones Úteis': [
      { id: '9', title: 'Suporte TI', type: 'phone', phoneNumber: '(34) 3239-1000', description: 'Suporte técnico' },
      { id: '10', title: 'Recursos Humanos', type: 'phone', phoneNumber: '(34) 3239-2000', description: 'Departamento de RH' },
      { id: '11', title: 'Manutenção', type: 'phone', phoneNumber: '(34) 3239-3000', description: 'Serviços de manutenção' },
      { id: '12', title: 'Recepção', type: 'phone', phoneNumber: '(34) 3239-4000', description: 'Recepção principal' },
    ],
    'Sistemas': [
      { id: '13', title: 'Sistema de RH', type: 'system', link: '#', description: 'Portal do funcionário' },
      { id: '14', title: 'Intranet', type: 'system', link: '#', description: 'Portal interno' },
      { id: '15', title: 'Helpdesk', type: 'system', link: '#', description: 'Sistema de chamados' },
      { id: '16', title: 'SEI', type: 'system', link: '#', description: 'Sistema Eletrônico de Informações' },
    ],
    'Links Úteis': [
      { id: '17', title: 'Site Oficial', type: 'other', link: 'https://www.uberlandia.mg.gov.br', description: 'Site oficial da Prefeitura' },
      { id: '18', title: 'Portal da Transparência', type: 'other', link: '#', description: 'Acesso à informação pública' },
      { id: '19', title: 'Diário Oficial', type: 'other', link: '#', description: 'Publicações oficiais' },
      { id: '20', title: 'Capacitação Online', type: 'other', link: '#', description: 'Plataforma de treinamentos' },
    ],
  };

  // Filter resources based on search query
  const filterResources = () => {
    if (!searchQuery) return allResources;

    const filtered: Record<string, ResourceItem[]> = {};
    
    Object.entries(allResources).forEach(([category, resources]) => {
      const matchedResources = resources.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (resource.description && resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      if (matchedResources.length > 0) {
        filtered[category] = matchedResources;
      }
    });
    
    return filtered;
  };

  const filteredResources = filterResources();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {Object.keys(filteredResources).length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Nenhum resultado encontrado</h2>
            <p className="text-gray-600">Tente outra palavra-chave para sua busca</p>
          </div>
        ) : (
          Object.entries(filteredResources).map(([category, resources]) => (
            <ResourceSection 
              key={category} 
              title={category} 
              resources={resources} 
            />
          ))
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
