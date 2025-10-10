import React, { JSX } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <p style={{margin: '4rem', fontSize: '1.2rem'}}>
        This documentation serves as a guide to understand the code style, best practices, and implementation details of the project.
        <br />
        Whether you are a developer looking to contribute to the project, a team member aiming to understand the project structure, or simply curious about how things work behind the scenes, this documentation is here to help.
        </p>
      </main>
    </Layout>
  );
}
