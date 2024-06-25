import React from "react";
import UnderlineDecoration from "../components/UnderlineDecoration";
import Form from "../components/Form";
import PageLanding from "../components/PageLanding";

const Contact = (props) => {
  return (
    <div>
      {/* Landing of the section */}
      <PageLanding PageLandingHeading="contact" imgUrl="contactImage" />
      <div className="contact-form-box py-[120px]">
        <div className="contact-form-text mb-[50px]">
          <h2 className="sub-heading text-center uppercase">contact with us</h2>
          <div className=" text-center">
            <UnderlineDecoration />
          </div>
          <h1 className="heading text-center">
            Feel Free to Get in <br /> Touch with us
          </h1>
        </div>
        {/* Form here */}
        <Form />
      </div>
      {/* google Map */}
      <iframe
        title="Unique title for iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28582.986144757782!2d80.31934102361753!3d26.427566005274407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47108854072b%3A0xb40a293dfd2bfd5c!2sKidwai%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718897351447!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
