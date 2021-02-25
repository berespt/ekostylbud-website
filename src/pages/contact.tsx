import { NextPage, GetStaticProps } from 'next';
import ContactSection from '../components/home/ContactSection';
import Layout from 'components/home/Layout';
import { ContactAttributes } from 'interfaces/contact';
interface Props {
  content: { attributes: ContactAttributes };
}

const ContactPage: NextPage<Props> = ({ content }) => {
  return (
    <Layout>
      <ContactSection {...content.attributes}></ContactSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'contact'}.md`);

  return { props: { content: content.default } };
};

export default ContactPage;
