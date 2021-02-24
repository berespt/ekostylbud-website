import { Feature } from 'interfaces/home';
import Features from './Features';

interface Props {
  title: string;
  features: Feature[];
}

const FeatureSection: React.FC<Props> = ({ title, features }) => {
  return (
    <section className="text-gray-700 body-font" id="features">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl title-font">
            {title}
          </h1>
        </div>
        <Features features={features} />
      </div>
    </section>
  );
};

export default FeatureSection;
