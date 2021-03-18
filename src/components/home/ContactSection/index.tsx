import ReactMarkdown from 'react-markdown';
import { ContactAttributes } from 'interfaces/contact';

const ContactSection: React.FC<ContactAttributes> = ({
  contact_title,
  contact_description,
  contact_image,
  contact_address,
  contact_phone,
  contact_email,
}): JSX.Element => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl text-center mb-16 font-semibold font-heading">
        Skontaktuj się z nami
      </h2>
      <div className="flex flex-wrap items-center -mx-6">
        <div className="w-full lg:w-1/2 px-6 lg:px-24 mb-8 lg:mb-0">
          <img src={contact_image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <h3 className="text-2xl mb-2 font-semibold font-heading">
            {contact_title}
          </h3>
          <p className="mb-8">{contact_description}</p>
          <ul>
            <li className="mb-4 flex items-center">
              <svg
                className="inline-block w-6 h-6 mr-3 text-ekogreen-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span>{contact_address}</span>
            </li>
            <li className="mb-4 flex items-center">
              <svg
                className="inline-block w-6 h-6 mr-3 text-ekogreen-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span>{contact_phone}</span>
            </li>
            <li className="mb-4 flex items-center">
              <svg
                className="inline-block w-6 h-6 mr-3 text-ekogreen-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span>{contact_email}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
