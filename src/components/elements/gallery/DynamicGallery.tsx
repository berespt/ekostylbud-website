import dynamic from 'next/dynamic';
import Spinner from 'components/icons/Spinner';
import { GalleryImage } from 'interfaces/portfolio';

const View = dynamic((): any => import('./GalleryView'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Spinner width="20" fill="white" className="animate-spin" />,
});

interface GalleryProps {
  images: GalleryImage[];
}

const DynamicGallery: React.FC<GalleryProps> = (images) => {
  return <View {...images} />;
};

export default DynamicGallery;
