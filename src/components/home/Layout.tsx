import { ReactNode } from 'react';
import { NextPage } from 'next';

import Header from 'components/home/Header';
import Footer from 'components/home/Footer';
import { ContactAttributes } from 'interfaces/contact';

interface Props {
  children: ReactNode;
  contactInfo: ContactAttributes;
}

const Layout: NextPage<Props> = ({ children, contactInfo }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default Layout;
