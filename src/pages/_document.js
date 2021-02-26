import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;700&family=Exo:ital,wght@0,300;0,400;0,700;1,400;1,500;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" />
          <meta
            name="description"
            content="Web developer portfolio for Jared Gebel. Includes examples of web applications built in React, Express, and Nextjs."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
