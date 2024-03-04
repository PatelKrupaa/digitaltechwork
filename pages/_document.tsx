import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Digital-Techworks </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta content="demo Template" name="description" />
        <meta name="author" content="Shreethemes" />
        <meta name="website" content="https://shreethemes.in/" />
        <meta name="email" content="support@shreethemes.in" />
        <meta name="version" content="1.0.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        <link href="assets/libs/tobii/css/tobii.min.css" rel="stylesheet" />
        <link href="assets/libs/choices.js/public/assets/styles/choices.min.css" rel="stylesheet" />
        <link href="assets/libs/%40iconscout/unicons/css/line.css" type="text/css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/icons.css" />
        <link rel="stylesheet" href="assets/css/tailwind.min.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/assets/libs/tobii/js/tobii.min.js" />
        <Script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js" />
        <Script src="/assets/libs/feather-icons/feather.min.js" />
        <Script src="/assets/js/plugins.init.js" />
        <Script src="/assets/js/app.js" />
      </body>
    </Html>
  );
}