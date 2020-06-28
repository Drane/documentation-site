import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Strong Authentication</>,
    // imageUrl: 'img/icon_doc.svg',
    description: (
      <>
        e-Box allows all actors of society to exchange messages using Belgium's official authentication mechanism. In so doing you know that you are reaching who you which to reach.
        <br/>
        <br/>
        Companies can be reached just by knowing theire CBE identifier, citizen by knowing theire NRN.
        This gives e-Box messages a stronger legal backing that common electronic exchange systems like eMail.
      </>
    ),
  },
  {
    title: <>Auditable</>,
    // imageUrl: 'img/icon_blog.svg',
    description: (
      <>
        When sending a Messages, it is sometime important to know what has happened to this messages.
        e-Box provides methods to retrieve the Read Status of any Messages.
        Inquiries can be performed upon request to review activities arround the Messages.
      </>
    ),
  },
  {
    title: <>Decentralized & Confidential</>,
    // imageUrl: 'img/icon_blog.svg',
    description: (
      <>
        Confidentiallity in e-Box is tunable, but at it's highest setting, your Messages reach theire destination
        without ever passing through third party servers.
        <br/>
        <br/>
        Through it's dual integration profiles, e-Box offers
        the choice to Senders to either send Messages to an existing Message Registry or setup theire own Message
        Registry.
      </>
    ),
  },
  // {
  //   title: <>Mail Notification</>,
  //   // imageUrl: 'img/icon_blog.svg',
  //   description: (
  //     <>
  //       Let's face it, most user will rarely have to go to e-Box, users can therefore be informed by eMail of any new Messages.
  //     </>
  //   ),
  // },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4 text--left', styles.feature, styles.featureBox)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p >{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>Get Started!<i class="fas fa-long-arrow-alt-right ml-2"></i>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
