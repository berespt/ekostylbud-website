import { ComponentType } from 'react';
import ServicesSection from 'components/home/ServicesSection';

const ServicesPreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  // const clients = [];
  // widgetsFor('clients').map((client) => {
  //   clients.push({
  //     name: client?.getIn(['data', 'name']),
  //     description: client?.getIn(['data', 'description']),
  //   });
  // });

  return (
    <>
      <ServicesSection
        title={entry.getIn(['data', 'services_title'])}
        description={entry.getIn(['data', 'services_description'])}
        services={entry.getIn(['data', 'services'])}
        image=""
        // clients={clients}
      />
    </>
  );
};

export default ServicesPreview;
