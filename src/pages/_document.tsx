import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'

type PortfolioDocumentProps = DocumentInitialProps & { locale?: string };

export default function PortfolioDocument({ locale }: PortfolioDocumentProps) {
  return (
    <Html lang={locale ?? "it"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

PortfolioDocument.getInitialProps = async (context: DocumentContext): Promise<PortfolioDocumentProps> => {
  const initialProps = await Document.getInitialProps(context);
  return { ...initialProps, locale: context.locale };
};
