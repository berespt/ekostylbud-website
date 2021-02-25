import { ComponentType } from 'react';
import HeroSection from 'components/home/HeroSection';
import ClientSection from 'components/home/ClientsSection';

const HomePreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  const clients = [];
  widgetsFor('clients').map((client) => {
    clients.push({
      name: client?.getIn(['data', 'name']),
      description: client?.getIn(['data', 'description']),
    });
  });

  return (
    <>
      <HeroSection
        title={entry.getIn(['data', 'hero_title'])}
        description={entry.getIn(['data', 'hero_description'])}
        image={entry.getIn(['data', 'hero_image'])}
      />
      <ClientSection
        title={entry.getIn(['data', 'client_title'])}
        clients={clients}
      />
    </>
  );
};

export default HomePreview;
