import React, { memo, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { serverAddress } from '../config';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

  const { register, handleSubmit, errors, formState } = useForm();
  const { isValid } = formState;
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isServerErr, setServerErr] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  function onChange(value) {
    setCaptcha(value);
  }
  const onSubmit = data => {
    if(captcha !== null) {
    axios.post(`${serverAddress}contactform`, data)
      .then(response => {
        setIsMsgSent(true);
        setTimeout(() => setIsMsgSent(false), 5000);
      })
      .catch((error) => {
        console.log(error);
        setServerErr(true);
        setTimeout(() => setServerErr(false), 5000);
      });
    }
  };
  return (
    <div className="container" id="contact-form">
      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <form role="form" className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input ref={register({ required: true })} type="text" name="name" className="form-control" id="name" placeholder="Imię" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation" />
            </div>
            <div className="form-group col-md-6">
              <input ref={register({ required: true,  })} type="email" className="form-control" name="email" id="email" placeholder="Email"  />
              <div className="validation" />
            </div>
          </div>
          <div className="form-group">
            <input ref={register({ required: true })} type="text" className="form-control" name="subject" id="subject" placeholder="Temat" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validation" />
          </div>
          <div className="form-group">
            <textarea ref={register({ required: true })} className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Wiadomość" defaultValue={""} />
            <div className="validation" />
          </div>
          {errors.name &&
            <div className="alert alert-danger" role="alert">Pole Imię jest wymagane </div>}
          {errors.email &&
            <div className="alert alert-danger" role="alert">Pole Email jest wymagane </div>}
          {errors.subject &&
            <div className="alert alert-danger" role="alert">Pole Temat jest wymagane </div>}
          {errors.message &&
            <div className="alert alert-danger" role="alert">Pole Wiadomość jest wymagane </div>}
          {isMsgSent &&
            <div className="alert alert-success" role="alert">Wiadomość została wysłana</div>}
          {isServerErr &&
            <div className="alert alert-danger" role="alert">Przepraszamy.Wiadomość nie została wysłana. Spróbuj ponownie później</div>}
          <div className="text-center">
            <ReCAPTCHA
              onChange={onChange}
              sitekey="6LfTLP8UAAAAAHHruZcSLWZaNFbBTDjk4fMRl-y1"
            />
            <button style={!isValid || captcha === null ? { cursor: 'not-allowed' } : { cursor: 'default' }} type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  )
}

export default memo(ContactForm); 
