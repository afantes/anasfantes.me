import { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "jotai";
import { DefaultSeo } from "next-seo";
import SEO from "@/seoConfig";
import { GlobalStyle } from "@/styles/GlobalStyle";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
