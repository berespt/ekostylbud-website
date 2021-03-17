import { ComponentType } from 'react';
import PortfolioSection from 'components/home/PortfolioSection';

const PortfolioPreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  const places = widgetsFor('places')
    .map((place) => ({
      name: place?.getIn(['data', 'name']),
      images: place?.getIn(['data', 'images']).toJS(),
    }))
    .toJS();
  return (
    <>
      <PortfolioSection places={places} />
    </>
  );
};

export default PortfolioPreview;
