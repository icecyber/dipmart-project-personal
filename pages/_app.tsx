import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider>
      <Component key={router.asPath} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
