import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>My email is poop@gmail.com.
      <a href="twitter.com/inspectordanno"> My Twitter.</a>
      </p>
      <Footer />
    </div>
  );
}

export default ContactPage;