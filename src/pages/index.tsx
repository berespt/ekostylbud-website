import { NextPage, GetStaticProps } from 'next';

import SEO from 'components/home/SEO';
import HeroSection from 'components/home/HeroSection';
import Layout from 'components/home/Layout';
import ClientsSection from 'components/home/ClientsSection';
import { HomeAttributes } from 'interfaces/home';
import { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
interface Props {
  content: { attributes: HomeAttributes };
}

const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  useEffect(() => netlifyIdentity.init(), []);
  return (
    <>
      <SEO />
      <Layout>
        <HeroSection
          title={attributes.hero_title}
          description={attributes.hero_description}
          image={attributes.hero_image}
        />
        <ClientsSection
          title={attributes.client_title}
          clients={attributes.clients}
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
