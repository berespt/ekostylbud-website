import { ContactAttributes } from 'interfaces/contact';
import Phone from 'components/icons/Phone';
import Link from 'next/link';
import Email from 'components/icons/Email';

interface Props {
  contactInfo: ContactAttributes;
}

const Footer = ({ contactInfo }: Props): JSX.Element => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link href="/">
              <a className="text-base leading-6 text-gray-600 hover:text-gray-800">
                Strona główna
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/services">
              <a className="text-base leading-6 text-gray-600 hover:text-gray-800">
                Nasze usługi
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/portfolio">
              <a className="text-base leading-6 text-gray-600 hover:text-gray-800">
                Realizacje
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact">
              <a className="text-base leading-6 text-gray-600 hover:text-gray-800">
                Kontakt
              </a>
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center">
          <a
            href={'tel:' + contactInfo.contact_phone}
            className="flex text-gray-400 hover:text-gray-500 group"
          >
            <span className="sr-only">Telefon</span>
            <Phone className="group-hover:opacity-100 opacity-50"></Phone>
            {contactInfo.contact_phone}
          </a>
          <a
            href={'mailto:' + contactInfo.contact_email}
            className="flex ml-10 text-gray-400 hover:text-gray-500 group"
          >
            <span className="sr-only">Email</span>
            <Email className="group-hover:opacity-100 opacity-50"></Email>
            {contactInfo.contact_email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
