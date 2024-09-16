"use client";

import Script from "next/script";
import React, { useEffect } from "react";

const GoogleAd1 = () => {
  return (
    <div>

      <ins
        className="block adsbygoogle"
        data-ad-client="ca-pub-8664858641724509"
        data-ad-slot="2737958607"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
    </div>
  );
};

export default GoogleAd1;
