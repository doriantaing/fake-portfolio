import React, { useState } from 'react';
import Title from "components/atoms/Title/Title";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";
import Contact from "components/layouts/contact";
import ContactHeader from "components/layouts/contact-header";
import ContactBody from "components/layouts/contact-body";
import ContactForm from "components/layouts/contact-form";
import ContactMap from "components/layouts/contact-map";
import ReactMapGL from 'react-map-gl';
import ContactSubmit from "components/layouts/contact-submit";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    textarea: ''
  });
  const onChange = (_key, _value) => {
    const updateData = { ...formState };

    updateData[_key] = _value;
    setFormState(updateData);
  };
  const viewport = {
    width: 620,
    height: 478,
    latitude: 48.851846,
    longitude: 2.420584,
    zoom: 8
  };

  return (
    <Contact className="contact-section">
      <ContactHeader>
        <Title type="h3" isUppercase={true}>Contact Us</Title>
      </ContactHeader>
      <ContactBody>
        <ContactForm>
          <Input
            label="Name"
            changeEvent={onChange}
            inputType="text"
            fieldKey="name"
            value={formState.name}
          />
          <Input
            label="Email"
            changeEvent={onChange}
            inputType="email"
            fieldKey="email"
            value={formState.email}
          />
          <Textarea
            placeholder="Message"
            value={formState.textarea}
            changeEvent={onChange}
            fieldKey="textarea"
          />
          <ContactSubmit>
            <Button>Send</Button>
          </ContactSubmit>
        </ContactForm>
        <ContactMap>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          />
        </ContactMap>
      </ContactBody>
    </Contact>
  )
};

export default ContactSection;
