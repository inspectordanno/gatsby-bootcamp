import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>My email is poop@gmail.com. <a href="twitter.com/inspectordanno"> My Twitter.</a></p>
    </Layout>
  );
}

export default ContactPage;