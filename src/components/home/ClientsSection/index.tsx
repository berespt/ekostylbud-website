import { Client } from 'interfaces/home';
import Clients from './Clients';

interface Props {
  title: string;
  clients: Client[];
}

const ClientsSection: React.FC<Props> = ({ title, clients }) => {
  return (
    <section className="text-gray-700 body-font" id="clients">
      <div className="container px-5 pt-10 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl title-font">
            {title}
          </h1>
        </div>
        <Clients clients={clients} />
      </div>
    </section>
  );
};

export default ClientsSection;
