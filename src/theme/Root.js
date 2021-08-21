import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({ children }) {

  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      {children}
      <BrowserOnly>
        {(() => {
          var ins = document.createElement("ins");
          ins["className"] = "adsbygoogle";
          ins.setAttribute("style", "display: block");
          ins.setAttribute("data-ad-client", "ca-pub-5037854579642309");
          ins.setAttribute("data-ad-slot", "6200648204");
          ins.setAttribute("data-ad-format", "auto");
          ins.setAttribute("data-full-width-responsive", "true");

          setTimeout(() => {
            document.querySelector("header")?.appendChild(ins);
          }, 1000);
        })()}
      </BrowserOnly>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5037854579642309"
        crossorigin="anonymous"></script>
      {(window.adsbygoogle = window.adsbygoogle || []).push({})}
    </SWRConfig>
  );
}