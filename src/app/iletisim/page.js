import { Inter } from 'next/font/google';
import Map from '../components/map';
import '@/app/styles/iletisim.scss';
const inter = Inter({ subsets: ['latin'] });

export default function İletisim() {
  return (
    <div className="contact">
      <div className="contact-info">
        <span>İletişim Bilgileri</span>
        <h1>Cep Tel No: +90 532 592 01 42</h1>
        <h1>
          Adres: Kızılkanat Sağlık Sitesi A blok Kat:3 Daire:35 Alsancak/İzmir{' '}
        </h1>
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
}
