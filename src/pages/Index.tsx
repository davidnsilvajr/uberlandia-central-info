
import React, { useState } from 'react';
import Header from '../components/Header';
import ResourceSection from '../components/ResourceSection';
import Footer from '../components/Footer';
import { ResourceItem } from '../components/ResourceCard';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Recursos organizados conforme a nova estrutura
  const allResources: Record<string, ResourceItem[]> = {
    'Atualização do Processo': [
      { 
        id: '1', 
        title: 'Atualização de Processo', 
        type: 'other', 
        link: 'https://forms.google.com/seu-formulario-aqui', 
        description: 'Google Forms para atualização do processo' 
      },
    ],
    'Pastas Núcleos': [
      { id: '2', title: 'Núcleo Geração de Atas', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-atas', description: 'Pasta do Núcleo de Geração de Atas' },
      { id: '3', title: 'Núcleo de Dispensa/Inex', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-dispensa', description: 'Pasta do Núcleo de Dispensa/Inexigibilidade' },
      { id: '4', title: 'Núcleo Jurídico', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-juridico', description: 'Pasta do Núcleo Jurídico' },
      { id: '5', title: 'Núcleo de Processos Licitatórios', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-licitatorios', description: 'Pasta do Núcleo de Processos Licitatórios' },
      { id: '6', title: 'Núcleo Técnico', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-tecnico', description: 'Pasta do Núcleo Técnico' },
      { id: '7', title: 'Núcleo de Contratos', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-contratos', description: 'Pasta do Núcleo de Contratos' },
      { id: '8', title: 'Núcleo de Formalização de Processos', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-formalizacao', description: 'Pasta do Núcleo de Formalização de Processos' },
      { id: '9', title: 'Núcleo de Planejamento de Compras', type: 'folder', link: 'https://drive.google.com/drive/folders/nucleo-planejamento', description: 'Pasta do Núcleo de Planejamento de Compras' },
      { id: '10', title: 'Arquivo', type: 'folder', link: 'https://drive.google.com/drive/folders/arquivo', description: 'Pasta do Arquivo' },
      { id: '11', title: 'Gabinete', type: 'folder', link: 'https://drive.google.com/drive/folders/gabinete', description: 'Pasta do Gabinete' },
      { id: '12', title: 'Sicom', type: 'folder', link: 'https://drive.google.com/drive/folders/sicom', description: 'Pasta do Sicom' },
    ],
    'Sistemas': [
      { id: '13', title: 'WebCompras', type: 'system', link: 'https://webcompras.seu-link.com', description: 'Sistema WebCompras' },
      { id: '14', title: 'Sistemas PMU', type: 'system', link: 'https://sistemas.uberlandia.mg.gov.br', description: 'Sistemas da PMU' },
      { id: '15', title: 'E-licitações', type: 'system', link: 'https://elicitacoes.seu-link.com', description: 'Sistema E-licitações' },
      { id: '16', title: 'WebContratos', type: 'system', link: 'https://webcontratos.seu-link.com', description: 'Sistema WebContratos' },
    ],
    'Links Úteis': [
      { id: '17', title: 'Protocolo', type: 'other', link: 'https://protocolo.uberlandia.mg.gov.br', description: 'Sistema de Protocolo' },
      { id: '18', title: 'Transparência Licitações', type: 'other', link: 'https://transparencia.uberlandia.mg.gov.br/licitacoes', description: 'Portal de Transparência - Licitações' },
      { id: '19', title: 'Portal Cidadão', type: 'other', link: 'https://cidadao.uberlandia.mg.gov.br', description: 'Portal do Cidadão' },
    ],
    'Arquivos Úteis': [
      { id: '20', title: 'Telefones da DC', type: 'spreadsheet', link: 'https://drive.google.com/file/telefones-dc', description: 'Lista de telefones da Diretoria de Compras' },
      { id: '21', title: 'Telefones PMU', type: 'spreadsheet', link: 'https://drive.google.com/file/telefones-pmu', description: 'Lista de telefones da PMU' },
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
