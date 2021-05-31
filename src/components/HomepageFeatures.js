import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn and Share',
    img: require('../../static/img/learn.png').default,
    description: (
      <>
        With Tutorials and Blog entries you have a perfect knowledge base - and it's completely community driven.
      </>
    ),
  },
  {
    title: 'Focus on Goals',
    img: require('../../static/img/darts.png').default,
    description: (
      <>
      The X-Team leverages the communitcation and provide a solid base to solve problems and reach goals together.
      </>
    ),
  },
  {
    title: 'Become a Member',
    img: require('../../static/img/wave.png').default,
    description: (
      <>
        Join the X-Team and profit by the inspring motivation to discover and build new things. You can become a part of a X-Team with <a href="https://github.com/iota-community/Template_IOTA-X-Team-Initiative/issues/new/choose">this appliction</a>.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
