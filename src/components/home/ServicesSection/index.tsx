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
      <div className="flex flex-wrap px-5 py-24">
        <div className="lg:w-1/2 px-2 lg:pr-32 mb-6 lg:mb-0">
          <h2 className="text-3xl font-semibold">{title}</h2>
        </div>
        <div className="lg:w-1/2 px-2">
          <p className="mb-12">{description}</p>
          <div className="flex flex-wrap -mx-6">
            <div className="px-6 mb-6 lg:mb-0">
              <div className="w-1/2 text-xl mb-6 font-semibold">
                Nasze usługi
              </div>
              <ul className="grid grid-cols-2 gap-x-36 gap-y-6">
                {services.map((service) => (
                  <li className="text-sm">{service}</li>
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
