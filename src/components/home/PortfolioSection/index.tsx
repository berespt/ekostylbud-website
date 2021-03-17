import DynamicGallery from 'components/elements/gallery/DynamicGallery';
import { Place } from 'interfaces/portfolio';
import { useState } from 'react';
interface Props {
  places: Place[];
}

const PortfolioSection: React.FC<Props> = ({ places }): JSX.Element => {
  const [activePlace, setActivePlace] = useState(0);
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl text-center mb-8 font-semibold font-heading">
        Realizacje
      </h2>
      <div className="flex max-w-lg mb-12 mx-auto text-center border-b-2">
        {places.map((place, i) => (
          <div
            key={place.name}
            className={
              'w-1/3 pb-2 ' +
              (i == activePlace ? 'border-b-4 border-indigo-600' : '')
            }
          >
            <button
              className="hover:text-indigo-600"
              onClick={() => setActivePlace(i)}
            >
              {place.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        <DynamicGallery images={places[activePlace].images}></DynamicGallery>
      </div>
    </section>
  );
};

export default PortfolioSection;
