import { NextPage, GetStaticProps } from 'next';
import PortfolioSection from '../components/home/PortfolioSection';
import Layout from 'components/home/Layout';
import { PortfolioAttributes } from 'interfaces/portfolio';
import { ContactAttributes } from 'interfaces/contact';
interface Props {
  content: { attributes: PortfolioAttributes };
  contactInfo: { attributes: ContactAttributes };
}

const PortfolioPage: NextPage<Props> = ({ content, contactInfo }) => {
  return (
    <Layout contactInfo={contactInfo.attributes}>
      <PortfolioSection places={content.attributes.places}></PortfolioSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'portfolio'}.md`);
  const contactInfo = await import(`../content/pages/${'contact'}.md`);

  return {
    props: { content: content.default, contactInfo: contactInfo.default },
  };
};

export default PortfolioPage;
