
import React from 'react';
import { File, Folder, Phone, Link as LinkIcon } from 'lucide-react';

export type ResourceType = 'spreadsheet' | 'folder' | 'phone' | 'system' | 'other';

export interface ResourceItem {
  id: string;
  title: string;
  type: ResourceType;
  link?: string;
  description?: string;
  phoneNumber?: string;
}

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'spreadsheet':
        return <File className="h-8 w-8 text-uberlandia-blue" />;
      case 'folder':
        return <Folder className="h-8 w-8 text-uberlandia-yellow" />;
      case 'phone':
        return <Phone className="h-8 w-8 text-uberlandia-green" />;
      case 'system':
        return <LinkIcon className="h-8 w-8 text-uberlandia-blue" />;
      default:
        return <LinkIcon className="h-8 w-8 text-gray-500" />;
    }
  };

  const handleClick = () => {
    if (resource.link) {
      window.open(resource.link, '_blank');
    }
  };

  return (
    <div 
      className="card-link animate-fade-in border-t-4 border-uberlandia-blue hover:border-uberlandia-yellow transition-colors" 
      onClick={handleClick}
    >
      <div className="mb-3">{getIcon()}</div>
      <h3 className="font-semibold text-gray-800 text-center mb-2">{resource.title}</h3>
      {resource.description && (
        <p className="text-sm text-gray-600 text-center">{resource.description}</p>
      )}
      {resource.phoneNumber && (
        <p className="text-sm font-medium text-uberlandia-green mt-2 text-center">{resource.phoneNumber}</p>
      )}
    </div>
  );
};

export default ResourceCard;
