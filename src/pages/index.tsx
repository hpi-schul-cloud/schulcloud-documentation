import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <header className={`hero hero--primary ${styles.heroBanner}`}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
            </div>
        </header>
      <main>
        <p style={{margin: '4rem', fontSize: '1.2rem'}}>
        This documentation serves as a guide to understand the code style, best practices, and implementation details of the project.
        <br />
        Whether you are a developer looking to contribute to the project, a team member aiming to understand the project structure, or simply curious about how things work behind the scenes, this documentation is here to help.
        </p>
      </main>
    </Layout>
  );
}
