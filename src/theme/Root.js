import React from 'react';
import { SWRConfig } from 'swr';

export default function Root({ children }) {
  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      <div>
        {children}
        <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5037854579642309"
        data-ad-slot="6200648204"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5037854579642309"
        crossorigin="anonymous"></script>
      
    </SWRConfig>
  );
}
//{(adsbygoogle = window.adsbygoogle || []).push({ })}