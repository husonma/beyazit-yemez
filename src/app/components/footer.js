import React from 'react'

const footerData = [
  {
    header: "Anasayfa",
    categories: [
      { href: "/", title: "Anasayfa" },
    ]
  },
  {
    header: "İletişim",
    categories: [
      { href: "/iletisim", title: "İletişim" },
    ]
  }
]
export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footerInfo'>©2024 Beyazıt Yemez</div>
        <span>Tüm Hakları Saklıdır.</span> 
          {footerData.map((cat) => (
          <div key={cat.header}>
            <div>
              {cat.categories.map((el) => (
                <a className='footer-link' href={el.href} key={el.title}>{el.title}</a>
              ))}
            </div>
          </div>
          ))}
    </footer>
  )
}