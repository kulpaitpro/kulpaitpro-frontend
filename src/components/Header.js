import React from 'react'

export const Header = () => {
  return (
    <section id="topbar" className="d-none d-lg-block">
      <div className="container clearfix">
        <div className="contact-info float-left">
          <i className="fa fa-envelope-o" /> <a href="mailto:contact@example.com">contact@example.com</a>
          <i className="fa fa-phone" /> +1 5589 55488 55
    </div>
        <div className="social-links float-right">
          <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
          <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
          <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
          <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
        </div>
      </div>
    </section>

  )
}
