
import React from 'react';
import ResourceCard, { ResourceItem } from './ResourceCard';

interface ResourceSectionProps {
  title: string;
  resources: ResourceItem[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ title, resources }) => {
  return (
    <section className="mb-8">
      <h2 className="section-title border-b-2 border-uberlandia-yellow inline-block">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default ResourceSection;
