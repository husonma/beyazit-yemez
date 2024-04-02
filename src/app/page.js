import { Inter } from "next/font/google";
import Image from "next/image";
import "@/app/styles/index.scss"
import styles from "@/app/styles/ImageWrapper.module.css" 
import Slider from "./components/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className={`${inter.className} top-main`}>
        <div className={styles.featuredImageWrapper}>
          <Image
            src="/beyazit_yemez.jpg"
            alt="PP"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority
            className="profile-img"
          />
        </div>
        <div className="top-main-info">
          <span> Prof. Dr. Beyazıt Yemez</span>
          <span className="span-info">ANA BİLİM DALI :</span>
          <span className="span-info">RUH SAĞLIĞI VE HASTALIKLARI</span>
        </div>
      </div>
      <div className="slider">
        <Slider/>
      </div>
    </div>
  );
}
