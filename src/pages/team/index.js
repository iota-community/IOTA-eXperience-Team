import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TEAM from './teamData';
import TeamMember from './TeamMember';

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`X-Team Members`}
      description="Description will go into a meta tag in <head />">
      <main>
        <section className={styles.section}>
          <div className="container">
            <h1 className="hero__title">X-Team Members</h1>
            <p className="hero__subtitle">List of all members here...</p>
            <div className="row">
              {TEAM.map((item, index) => (
                <TeamMember key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
