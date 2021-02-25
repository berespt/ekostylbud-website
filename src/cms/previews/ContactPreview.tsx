import { ComponentType } from 'react';
import ContactSection from 'components/home/ContactSection';

const ContactPreview: ComponentType<any> = ({ entry, widgetsFor }) => {
  return (
    <>
      <ContactSection
        contact_title={entry.getIn(['data', 'contact_title'])}
        contact_description={entry.getIn(['data', 'contact_description'])}
        contact_image={entry.getIn(['data', 'contact_image'])}
        contact_address={entry.getIn(['data', 'contact_address'])}
        contact_phone={entry.getIn(['data', 'contact_phone'])}
        contact_email={entry.getIn(['data', 'contact_email'])}
      />
    </>
  );
};

export default ContactPreview;
