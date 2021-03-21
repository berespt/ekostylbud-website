import ReactMarkdown from 'react-markdown';
interface Props {
  title: string;
  description: string;
  image: string;
  services: string[];
}

const ServicesSection: React.FC<Props> = ({
  title,
  description,
  image,
  services,
}): JSX.Element => {
  return (
    <section>
      <div className="flex flex-wrap px-12 sm:py-24">
        <div className="lg:w-1/2 px-2 lg:pr-32 mb-6 lg:mb-0">
          <h2 className="text-2xl sm:text-4xl font-semibold">{title}</h2>
          <img className="py-4" src={image} alt="" />
        </div>
        <div className="lg:w-1/2 px-2">
          <div className="mb-12">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
          <div className="flex flex-wrap -mx-6">
            <div className="px-6 mb-6 lg:mb-0">
              <div className="w-1/2 text-xl mb-6 font-semibold">
                Nasze usługi
              </div>
              <ul className="grid grid-cols-2 gap-x-12 md:gap-x-36 gap-y-6">
                {services.map((service) => (
                  <li key={service} className="text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
