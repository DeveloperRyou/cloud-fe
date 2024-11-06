import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet prefetch"
        href="https://gist.githubusercontent.com/mfd/614e2e80a22b878bde63cb471cbe677e/raw/eef2aabfd0d588d43285431186a0cf70305ceb80/sanfrancisco-font.css"
      />
      <script src="https://static.okx.com/cdn/assets/okfe/libs/okxOAuth/index.js" async />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
