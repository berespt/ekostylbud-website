import { NextPage, GetStaticProps } from 'next';

import SEO from 'components/home/SEO';
import HeroSection from 'components/home/HeroSection';
import Layout from 'components/home/Layout';
import FeatureSection from 'components/home/FeatureSection';
import { HomeAttributes } from 'interfaces/home';

interface Props {
  content: { attributes: HomeAttributes };
}

const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;

  return (
    <>
      <SEO />
      <Layout>
        <HeroSection
          title={attributes.hero_title}
          description={attributes.hero_description}
          image={attributes.hero_image}
        />
        <FeatureSection
          version={attributes.feature_version}
          title={attributes.feature_title}
          description={attributes.feature_description}
          features={attributes.features}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);

  return { props: { content: content.default } };
};

export default HomePage;
