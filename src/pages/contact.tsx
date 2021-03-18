import { NextPage, GetStaticProps } from 'next';
import ContactSection from '../components/home/ContactSection';
import Layout from 'components/home/Layout';
import { ContactAttributes } from 'interfaces/contact';
interface Props {
  content: { attributes: ContactAttributes };
  contactInfo: { attributes: ContactAttributes };
}

const ContactPage: NextPage<Props> = ({ content, contactInfo }) => {
  return (
    <Layout contactInfo={contactInfo.attributes}>
      <ContactSection {...content.attributes}></ContactSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'contact'}.md`);
  const contactInfo = await import(`../content/pages/${'contact'}.md`);

  return {
    props: { content: content.default, contactInfo: contactInfo.default },
  };
};

export default ContactPage;
