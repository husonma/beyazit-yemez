import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import '@/app/styles/footer.scss';
import '@/app/styles/header.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beyazıt Yemez',
  description: 'Prof. Dr. Beyazıt Yemez',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header></Header>
        </div>
        {children}
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
