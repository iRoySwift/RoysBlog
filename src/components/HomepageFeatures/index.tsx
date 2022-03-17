import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  viewBox?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    viewBox: '0 0 1088 687.962',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    )
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
  //       <code>docs</code> directory.
  //     </>
  //   )
  // },
  {
    title: translate({
      message: 'Content Search',
      id: 'homepage.features.content-search.title'
    }),
    Svg: require('@site/static/img/undraw_algolia.svg').default,
    viewBox: '0 0 1137.97 736.21',
    description: (
      <>
        Make it easy for your community to find what they need in your documentation. We proudly support Algolia
        documentation search.
      </>
    )
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    viewBox: '0 0 1041.277 554.141',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    )
  }
];

function Feature({ title, Svg, viewBox, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} viewBox={viewBox} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
