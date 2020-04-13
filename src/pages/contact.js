import React from 'react';

import Layout from '../components/layout';
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>My email is poop@gmail.com. <a href="twitter.com/inspectordanno"> My Twitter.</a></p>
    </Layout>
  );
}

export default ContactPage;