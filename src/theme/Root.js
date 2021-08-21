import React from 'react';
import { SWRConfig } from 'swr';

export default function Root({ children }) {
  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      {children}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5037854579642309"
        crossorigin="anonymous"></script>
      {(window.adsbygoogle = window.adsbygoogle || []).push({})}
    </SWRConfig>
  );
}