import React, { memo, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { serverAddress } from '../config';

const ContactForm = () => {

  const { register, handleSubmit, errors, formState } = useForm();
  const { isValid } = formState;
  const[isMsgSent, setIsMsgSent] = useState(false);
  const onSubmit = data => {
    
    axios.post(`${serverAddress}contactform`)
      .then(response => {
        setIsMsgSent(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container" id="contact-form">
      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <form role="form" className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input ref={register} type="text" name="name" className="form-control" id="name" placeholder="Imię" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validation" />
            </div>
            <div className="form-group col-md-6">
              <input ref={register({ required: true })} type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" />
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
          {errors.email && 
            <div className="alert alert-danger" role="alert">Pole Email jest wymagane </div>}
          {errors.subject && 
            <div className="alert alert-danger" role="alert">Pole Temat jest wymagane </div>}
          {errors.message && 
            <div className="alert alert-danger" role="alert">Pole Wiadomość jest wymagane </div>}
          {isMsgSent && <div className="alert alert-success" role="alert">Wiadomość została wysłana</div>}
          <div className="text-center">
            <button style={!isValid ? {cursor: 'not-allowed'} : {cursor: 'default'}} type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  )
}

export default memo(ContactForm); 
