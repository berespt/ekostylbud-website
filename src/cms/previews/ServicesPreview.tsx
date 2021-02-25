import { ComponentType } from 'react';
import ServicesSection from 'components/home/ServicesSection';

const ServicesPreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  return (
    <>
      <ServicesSection
        title={entry.getIn(['data', 'services_title'])}
        description={entry.getIn(['data', 'services_description'])}
        services={entry.getIn(['data', 'services'])}
        image=""
      />
    </>
  );
};

export default ServicesPreview;
