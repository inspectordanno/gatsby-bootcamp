import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>My name is Dan.</p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </Layout>
    </div>
  );
}

export default AboutPage;