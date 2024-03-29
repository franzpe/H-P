import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../libs/gtag';

export default class MyDocument extends Document {
  render() {
    const renderGA = (
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GA_TRACKING_ID}', {
					page_path: window.location.pathname,
				});
    `
          }}
        />
      </>
    );

    return (
      <Html>
        <Head>{process.env.NODE_ENV === 'production' && renderGA}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
