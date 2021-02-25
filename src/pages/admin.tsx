import dynamic from 'next/dynamic';

import config from 'cms/config';
import HomePreview from 'cms/previews/HomePreview';
import ServicesPreview from 'cms/previews/ServicesPreview';
import ContactPreview from 'cms/previews/ContactPreview';
import PostPreview from 'cms/previews/PostPreview';
import Spinner from 'components/icons/Spinner';
import netlifyIdentity from 'netlify-identity-widget';
const CMS = dynamic(
  (): any =>
    import('netlify-cms-app').then((cms: any) => {
      netlifyIdentity.init();
      cms.init({ config });
      cms.registerPreviewStyle(
        'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
      );
      cms.registerPreviewStyle(
        'https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css'
      );
      cms.registerPreviewTemplate('home', HomePreview);
      cms.registerPreviewTemplate('services', ServicesPreview);
      cms.registerPreviewTemplate('contact', ContactPreview);
      cms.registerPreviewTemplate('posts', PostPreview);
    }),
  {
    ssr: false,
    // eslint-disable-next-line react/display-name
    loading: () => <Spinner width="20" fill="white" className="animate-spin" />,
  }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
