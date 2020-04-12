import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header'
import Footer from '../components/footer';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>My name is Dan.</p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </Layout>
    </div>
  );
}

export default AboutPage;