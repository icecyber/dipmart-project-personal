import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Component key={router.asPath} {...pageProps} />
    </Provider>
  );
}

export default MyApp;
