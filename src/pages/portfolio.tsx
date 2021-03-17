import { NextPage, GetStaticProps } from 'next';
import PortfolioSection from '../components/home/PortfolioSection';
import Layout from 'components/home/Layout';
import { PortfolioAttributes } from 'interfaces/portfolio';
interface Props {
  content: { attributes: PortfolioAttributes };
}

const PortfolioPage: NextPage<Props> = ({ content }) => {
  return (
    <Layout>
      <PortfolioSection places={content.attributes.places}></PortfolioSection>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'portfolio'}.md`);

  return { props: { content: content.default } };
};

export default PortfolioPage;
