import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const headerData = [
  {
    header: 'Anasayfa',
    categories: [{ href: '/', title: 'Anasayfa' }],
  },
  {
    header: 'İletişim',
    categories: [{ href: '/iletisim', title: 'İletişim' }],
  },
];

export default function Header() {
  return (
    <div className={`${inter.className} header`}>
      <div className="header-left">
        <img id="myImage" src="/logo.png"></img>
        <a href="/">Prof. Dr. Beyazıt Yemez</a>
      </div>
      <div className="header-right">
        {headerData.map((cat) => (
          <div key={cat.header}>
            <div className="header-titles">
              {cat.categories.map((el) => (
                <a className="header-link" href={el.href} key={el.title}>
                  {el.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
