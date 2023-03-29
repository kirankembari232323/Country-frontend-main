import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-link">
          <a
            href="https://www.linkedin.com/in/kiran-kembari-51a45a139/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="footer fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kirankembari23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="footer fa fa-github"></i>
          </a>

          <a
            aria-label="Email Serin"
            href="mailto:kirankembari22@gmail.com"
            // data-position="top"
            // data-tooltip="Email Serin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="footer fa fa-envelope"></i>
          </a>
        </div>

        <div>
          <p>&copy; 2021. Kiran Kembari - all rights reserved</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
