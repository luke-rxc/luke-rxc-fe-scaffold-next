import React, { useRef } from 'react';
import { AppProps } from 'next/app';
import { Hydrate } from 'react-query/hydration';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalNavibarContainer } from '@features/gnb/containers';
import GlobalStyle from '../styles/global';
import * as theme from '../styles/theme';

interface PageProps {
  dehydratedState: unknown;
}
interface Props extends AppProps<PageProps> {
  pageProps: PageProps;
}

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

const App = ({ Component, pageProps }: Props) => {
  const queryClientRef = useRef(createQueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClientRef.current}>
        <GlobalStyle />
        <GlobalNavibarContainer />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
