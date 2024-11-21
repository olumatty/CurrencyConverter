import "./globals.css";

export const metadata = {
  title: "Currency Converter",
  description: "An app that provides Exchange Rates & Currency Conversion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
