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
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default Layout;
