import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header'
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>My name is Dan.</p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
      <Footer />
    </div>
  );
}

export default AboutPage;