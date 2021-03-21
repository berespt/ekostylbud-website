import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>EkoStylBud</title>
    <meta
      name="description"
      content="Wykończenia wnętrz na rynku pierwotnym i wtórnym w Krakowie i okolicach"
    ></meta>
    <meta
      content="https://ekostylbud.netlify.app/favicon/og-image.png"
      property="og:image"
    ></meta>
    <meta content="https://ekostylbud.netlify.app" property="og:url"></meta>
    <meta content="website" property="og:type"></meta>
    <meta content="EkoStylBud" property="og:title"></meta>
    <meta
      content="Wykończenia wnętrz na rynku pierwotnym i wtórnym w Krakowie i okolicach"
      property="og:description"
    ></meta>

    {/* Twitter */}
    <meta name="twitter:title" content="NextWind"></meta>
    <meta
      name="twitter:description"
      content="Wykończenia wnętrz na rynku pierwotnym i wtórnym w Krakowie i okolicach"
    ></meta>
    <meta
      name="twitter:image"
      content="https://serverless.page/img/serverless-saas.png"
    ></meta>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:image:alt" content="EkoStylBud"></meta>

    {/* Favicon */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#2b5797"></meta>
    <meta name="theme-color" content="#ffffff"></meta>

    {/* Google Analytics */}
    {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=<YOUR_GA_ID_HERE>"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<YOUR_GA_ID_HERE>');
          `,
      }}
    /> */}
  </Head>
);

export default SEO;
