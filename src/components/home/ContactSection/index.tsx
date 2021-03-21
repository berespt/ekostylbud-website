import ReactMarkdown from 'react-markdown';
import { ContactAttributes } from 'interfaces/contact';
import Phone from 'components/icons/Phone';
import Email from 'components/icons/Email';
import Address from 'components/icons/Address';

const ContactSection: React.FC<ContactAttributes> = ({
  contact_title,
  contact_description,
  contact_image,
  contact_address,
  contact_phone,
  contact_email,
}): JSX.Element => {
  return (
    <section className="sm:py-12 px-12">
      <h2 className="text-3xl sm:text-4xl text-center mb-16 font-semibold font-heading">
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
              <Address></Address>
              <span>{contact_address}</span>
            </li>
            <li className="mb-4 flex items-center">
              <a href={'tel:' + contact_phone}>
                <Phone></Phone>
                {contact_phone}
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <a href={'mailto:' + contact_email}>
                <Email></Email>
                {contact_email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
