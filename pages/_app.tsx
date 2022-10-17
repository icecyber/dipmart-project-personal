import '../styles/globals.css';

import React from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
