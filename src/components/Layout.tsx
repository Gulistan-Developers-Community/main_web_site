import Header from './Header';

import SEO from './seo';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SEO />

      <Header />
      <main>{children}</main>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-7XVY1VPYB5"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
    </>
  );
}
