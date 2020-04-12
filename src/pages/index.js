import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Dan, a full-stack developer stuck at my parents house in Philadelphia.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  );
}

export default IndexPage;