import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import ServicesSection from '../components/home/ServicesSection';
import Layout from 'components/home/Layout';
import { ServicesAttributes } from 'interfaces/services';
import { ContactAttributes } from 'interfaces/contact';
interface Props {
  content: { attributes: ServicesAttributes };
  contactInfo: { attributes: ContactAttributes };
}

const ServicesPage: NextPage<Props> = ({ content, contactInfo }) => {
  return (
    <Layout contactInfo={contactInfo.attributes}>
      <ServicesSection
        title={content.attributes.services_title}
        description={content.attributes.services_description}
        services={content.attributes.services}
        image="img/scott-graham-5fNmWej4tAA-unsplash.jpg"
      ></ServicesSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'services'}.md`);
  const contactInfo = await import(`../content/pages/${'contact'}.md`);

  return {
    props: { content: content.default, contactInfo: contactInfo.default },
  };
};

export default ServicesPage;
