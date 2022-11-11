// These styles apply to every route in the application
import './globals.css';
import { Kumbh_Sans } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const kumbhSans = Kumbh_Sans();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={kumbhSans.className}>
      <body>{children}</body>
    </html>
  );
}
