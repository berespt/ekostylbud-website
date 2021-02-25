import { getIcon } from 'utils/getIcon';
import { Client } from 'interfaces/home';

interface Props {
  clients: Client[];
}

const Clients: React.FC<Props> = ({ clients }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {clients?.map((client: Client, i: number) => {
        return (
          <div className="p-4 md:w-1/3" key={i}>
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
                  {getIcon(1, 5)}
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  {client.name}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Clients;
