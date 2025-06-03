
import React, { useState } from 'react';
import Header from '../components/Header';
import ResourceSection from '../components/ResourceSection';
import Footer from '../components/Footer';
import { ResourceItem } from '../components/ResourceCard';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - you can replace this with your actual resources
  const allResources: Record<string, ResourceItem[]> = {
    'Atualização de Processo': [
      { id: '1', title: 'Portal SEI', type: 'system', link: 'https://sei.uberlandia.mg.gov.br', description: 'Sistema Eletrônico de Informações' },
      { id: '2', title: 'Tramitação de Processos', type: 'folder', link: '#', description: 'Documentos para tramitação' },
      { id: '3', title: 'Manual de Processos', type: 'spreadsheet', link: '#', description: 'Guia completo de procedimentos' },
      { id: '4', title: 'Suporte Processos', type: 'phone', phoneNumber: '(34) 3239-5000', description: 'Atendimento especializado' },
    ],
    'Planilhas': [
      { id: '5', title: 'Orçamento 2025', type: 'spreadsheet', link: 'https://docs.google.com/spreadsheets/exemplo1', description: 'Planilha de orçamento anual' },
      { id: '6', title: 'Relatório Mensal', type: 'spreadsheet', link: 'https://docs.google.com/spreadsheets/exemplo2', description: 'Relatório de atividades mensais' },
      { id: '7', title: 'Controle de Projetos', type: 'spreadsheet', link: '#', description: 'Acompanhamento de projetos' },
      { id: '8', title: 'Inventário', type: 'spreadsheet', link: '#', description: 'Lista de inventário atualizada' },
    ],
    'Pastas e Documentos': [
      { id: '9', title: 'Documentos Importantes', type: 'folder', link: 'https://drive.google.com/drive/folders/exemplo1', description: 'Pasta com documentos essenciais' },
      { id: '10', title: 'Manuais', type: 'folder', link: 'https://drive.google.com/drive/folders/exemplo2', description: 'Manuais e guias técnicos' },
      { id: '11', title: 'Legislação', type: 'folder', link: '#', description: 'Leis e regulamentos' },
      { id: '12', title: 'Arquivos de Projetos', type: 'folder', link: '#', description: 'Projetos em andamento e finalizados' },
    ],
    'Telefones Úteis': [
      { id: '13', title: 'Suporte TI', type: 'phone', phoneNumber: '(34) 3239-1000', description: 'Suporte técnico' },
      { id: '14', title: 'Recursos Humanos', type: 'phone', phoneNumber: '(34) 3239-2000', description: 'Departamento de RH' },
      { id: '15', title: 'Manutenção', type: 'phone', phoneNumber: '(34) 3239-3000', description: 'Serviços de manutenção' },
      { id: '16', title: 'Recepção', type: 'phone', phoneNumber: '(34) 3239-4000', description: 'Recepção principal' },
    ],
    'Sistemas': [
      { id: '17', title: 'Sistema de RH', type: 'system', link: 'https://rh.uberlandia.mg.gov.br', description: 'Portal do funcionário' },
      { id: '18', title: 'Intranet', type: 'system', link: 'https://intranet.uberlandia.mg.gov.br', description: 'Portal interno' },
      { id: '19', title: 'Helpdesk', type: 'system', link: 'https://helpdesk.uberlandia.mg.gov.br', description: 'Sistema de chamados' },
      { id: '20', title: 'SEI', type: 'system', link: 'https://sei.uberlandia.mg.gov.br', description: 'Sistema Eletrônico de Informações' },
    ],
    'Links Úteis': [
      { id: '21', title: 'Site Oficial', type: 'other', link: 'https://www.uberlandia.mg.gov.br', description: 'Site oficial da Prefeitura' },
      { id: '22', title: 'Portal da Transparência', type: 'other', link: 'https://transparencia.uberlandia.mg.gov.br', description: 'Acesso à informação pública' },
      { id: '23', title: 'Diário Oficial', type: 'other', link: 'https://diariooficial.uberlandia.mg.gov.br', description: 'Publicações oficiais' },
      { id: '24', title: 'Capacitação Online', type: 'other', link: 'https://capacitacao.uberlandia.mg.gov.br', description: 'Plataforma de treinamentos' },
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
