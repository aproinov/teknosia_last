import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    <meta name="google-site-verification" content="iv48T9CfZfs6q8Cnlqy8uZmxBw75tt2MC4M2DvA8Z38" />
    </Head>
  );
}
