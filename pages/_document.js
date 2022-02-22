import Document, { Head, Html, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Cache-control" content="public" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="keywords"
            content="Javascript, Next.js Tailwind Storybook appollo client graphql"
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
export default AppDocument;
