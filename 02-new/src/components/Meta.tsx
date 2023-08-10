import React from 'react';
import Head from 'next/head';

export const Meta = ({ metaTitle, metaDescription }) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
