import React from 'react';

const Contact = () => {
  // Your actual Formspree endpoint from the static HTML file
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqaboooa';

  return (
    <section id="contact" className="section container">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container">
        <div className="contact__card contact-info">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out if you want to collaborate on a project, have a job opportunity, or just want to say hi!</p>
          
          <ul className="contact__list">
            <li><i className="fa-regular fa-envelope"></i> punithawesome123@gmail.com</li>
            <li><i className="fa-solid fa-phone"></i> +91 63615 91618</li>
            <li><i className="fa-solid fa-location-dot"></i> Bengaluru, India</li>
          </ul>
        </div>

        <div className="contact__card contact-form">
          <h3>Send a Message</h3>
          
          <form action={FORMSPREE_ENDPOINT} method="POST">
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="button form__button">
              <i className="fa-regular fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;