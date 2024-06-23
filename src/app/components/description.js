import React from 'react';
import '@/app/styles/description.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const descriptions = [
  {
    id: 0,
    title: 'Özgeçmiş',
    subdesc: [
      { desc: '•Lise-> Bornova Anadolu Lisesi  (1973)' },
      { desc: '•Lise-> Ankara Fen Lisesi (1976)' },
      { desc: '•Lisans-> Ege Üniversitesi Ege Tıp Fakültesi (1982)' },
      {
        desc: '•Tıpta Uzmanlık-> Dokuz Eylül Üniversitesi Tıp Fakültesi Ruh Sağlığı ve Hastalıkları Dalı (1991)',
      },
      {
        desc: '•Yardımcı Doçent-> Dokuz Eylül Üniversitesi Tıp Fakültesi (1998)',
      },
      {
        desc: '•Doçent-> Dokuz Eylül Üniversitesi Tıp Fakültesi Psikiyatri (2000)',
      },
      { desc: '•Profesör-> Dokuz Eylül Üniversitesi Tıp Fakültesi (2010)' },
    ],
  },
  {
    id: 1,
    title: 'İLGİLENDİĞİ ALANLAR',
    subdesc: [
      {
        desc: 'Anksiyete (Kaygı) Bozuklukları:',
        subdesc:
          '•Yaygın Anksiyete Bozukluğu ( Sürekli gerginlik, endişe hali, kolay öfkelenme…); •Panik Bozukluk ( Aniden şiddetli anksiyete atakları); •Fobiler (Hayvan, Durumsal, Doğal Afet, Kan-enejksiyon…); •Sosyal Fobi ( Toplum önünde herhangi bir performans göstermekte aşırı korkma)',
      },
      {
        desc: 'Obsesif Kompulsif Bozukluk (Saplantı Zorlantı Bozukluğu):',
        subdesc:
          '•Kirlenme takıntısı - Temizlik, yıkanma zorlantısı; •Kuşku takıntısı, emin olamama - Kontrol etme zorlantısı; •Düzen takıntısı - Düzenleme, simetri zorlantısı; •Cinsel, dinsel, metafizik takıntılar…',
      },
      {
        desc: 'Duygudurum Bozuklukları:',
        subdesc:
          '•Depresyon (Mutsuzluk, ilgi kaybı, zevk almama, isteksizlik, iştah ve uyku sorunları...); •Bipolar Duygudurum Bozukluğu ( Manik ve Depresyon atakları)',
      },
      {
        desc: 'Uyku Bozuklukları:',
        subdesc:
          '•İnsomnia ( Uykuya dalmada zorluk, uyku bölünmeleri, yetersiz uyku…); •Hipersomnia ( Fazla uyuma...)',
      },
      {
        desc: 'İlişki Sorunları:',
        subdesc: '•Evlilik sorunları; •Ebeveyn - Çocuk sorunları',
      },
      {
        desc: 'Kişilik Sorunları:',
        subdesc:
          '•Obsesif Kompulsif Kişilik (Aşırı titiz, düzenli, prensipli, güvensiz...); •Paranoid Kişilik (Aşırı kuşkucu,kıskanç, güvensi...); •Borderline Kişilik ( Duygudurumunda ve kişilerarası ilişkilerinde değişkenlik, boşluk hissi, dürtüsellik...) ',
      },
      {
        desc: 'Alkol ve Madde Kullanım Bozuklukları:',
        subdesc:
          '•Alkol ve veya Madde Kötüye Kullanımı; •Alkol ve veya Madde Bağımlılığı',
      },
      {
        desc: 'Yeme Bozuklukları:',
        subdesc:
          '•Anoreksiya Nervoza ( İsteyerek aşırı zayıflama, kilo almaktan korkma…); •Bulimya Nervoza (Aşırı tıkınma ataklarının olması, kusma davranışı)',
      },
      {
        desc: 'Psikotik Bozukluklar:',
        subdesc:
          '•Varolmayan sesler duyma, görüntüler görme, gerçek olmayan düşüncelere sahip olma, kendi kendine konuşma; •İçe kapanma, sosyal, ailesel ve okul veya mesleki işlevlerinde ciddi bozulma…',
      },
    ],
  },
  {
    id: 2,
    title: 'Akademik Yazılar',
    subdesc: [
      {
        desc: '• Ritmik Cimnastikçilerde Yarışma Öncesi Kaygı Düzeylerinin Yarışma Sonuçlarıyla İlişkisi - 2013',
      },
      {
        desc: '• The effects of anxiety and depression symptoms on treatment adherence in COPD patients - 2013',
      },
      {
        desc: '• The validity and reliability of Turkish version of separation anxiety symptom inventory - 2012',
      },
      {
        desc: '• Ayrılma Anksiyetesi Belirtileri İçin Yapılandırılmış Klinik Görüşmesi Türkçe Versiyonunun Psikometri Özellikleri - 2012',
      },
      {
        desc: '• Anxıous Personality Is A Risk Factor For Developing Complex Regional Pain SyndromeType I - 2012',
      },
      {
        desc: '• The Influence of Health Care Reforms on Work Related Attitudes and Anxieties of Primary Care Physic - 2011',
      },
      {
        desc: '• Anxiety Sensitivity and Its Importance in Psychiatric Disorders - 2011',
      },
      {
        desc: '• The validity and reliability of the Turkish version of the anxiety sensitivity index-3 - 2010',
      },
      {
        desc: '• Quality of life, frequency of anxiety and depression in obstructive sleep apnea syndrome - 2008',
      },
      {
        desc: '• Panik bozuklukta GABAerjik ve glutamaerjik sistemler - 2008',
      },
      {
        desc: '• Konsültasyon liyezon psikiyatrisi uygulamaları ve farmakoterapi tercihlerinde değişim - 2007',
      },
      {
        desc: '• Zabıtaların sosyodemografik özellikleri ve çalışma yaşamı bileşenleriyle şiddetle karşılaşma durumları - 2007',
      },
      {
        desc: "• Parkinson Hastalığı'nda depresyon sıklığı ve yaşam kalitesini etkileyen faktörler - 2007",
      },
      {
        desc: "• Socio-demographic features and emotional-behavioral problems in a girl's orphanage in Turkey - 2006",
      },
      {
        desc: '• The relationship of pressure-pain threshold with alexithymia in healthy young subjects - 2005',
      },
      {
        desc: '• The relationship of pressure-pain threshold with alexithymia in healthy young subjects - 2005',
      },
      {
        desc: '• Mental health and communication skills training for the staff in a girls orphanage - 2005',
      },
      {
        desc: '• Yıkıcı Davraınış Bozukluklarında DSM IV Belirtileri Açısından Anne ve Öğretmen Verilerin Uyumu - 2002',
      },
      {
        desc: '• Sağlık alanında okuyan öğrencilerin empati beceri düzeyi ile ruhsal bozukluğu olanlara tutumları ara - 2001',
      },
      {
        desc: '• Tourette Bozukluğunda Ailesel, Davranışsal ve Klinik Özellikler - 2001',
      },
      {
        desc: '• Tc-99m HMPAO brain perfusion SPECT in drug-free obsessive-compulsive patients without depression - 2001',
      },
      {
        desc: '• Tıp eğitiminde iletişim becerileri: çağdaş yöntem ve teknikler - 2001',
      },
      {
        desc: '• Dikkat Eksikliği Hiperaktivite Bozukluğu Tanısına Varılan Olguların DSM-IV Ölçütlerine Göre Belirti - 2000',
      },
      {
        desc: '• Technetium-99m DTPA Inhalation Scintigraphy in Patients Treated with Fluoxetine and Maprotiline: Pre - 2000',
      },
      {
        desc: '• Romatoid artritli hastalarda aleksitimik özellikler - 2000',
      },
      {
        desc: '• Refraktif cerrahi uygulanmış olgularda psikometrik değerlendirme - 2000',
      },
      {
        desc: '• Psychosexual function in CAPD and hemodialysis patients - 1999',
      },
      {
        desc: '• Depresyon Etiyolojisi - 1998',
      },
      {
        desc: '• Dinar Depremi Sonrası Çocuklarda Görülen Ruhsal Belirtiler - 1998',
      },
      {
        desc: '• Aktif tıp eğitimi ve probleme dayalı öğrenme - 1997',
      },
      {
        desc: '• Epileptik Çocuklarda Görsel İşitsel Sayı Dizisi (GİSD-A) Uygulaması - 1996',
      },
      {
        desc: '• Spor ve Psikiyatri - 1996',
      },
      {
        desc: '• Fibromiyalji sendromunda psikolojik faktörlerin değerlendirilmesi - 1996',
      },
      {
        desc: '• Psödemans-depresyonda tanı aracı olarak SPECT FAS sözcük üretme testi: Bir olgu - 1995',
      },
      {
        desc: '• Superior sagital sinüs trombozu - 1989',
      },
    ],
  },
];
const Description = ({ activeDescription, setActiveByTitle }) => {
  return (
    <div className="grid w-full bg-[#6F90AF] relative">
      <div className="top-slider flex justify-center space-x-4 p-4">
        {descriptions.map((description) => (
          <div
            key={description.id}
            onClick={() => setActiveByTitle(description.id)}
            className={`cursor-pointer ${
              activeDescription === description.id ? 'font-bold' : 'font-normal'
            }`}
          >
            <a>{description.title}</a>
          </div>
        ))}
      </div>
      {descriptions &&
        descriptions.map((elem) => (
          <div
            key={elem.id}
            className={`${
              elem.id === activeDescription ? 'line-desc' : 'hidden'
            }`}
          >
            {elem.id === 1 ? (
              <div className="w-full bg-special">
                <div className="py-16 text-5xl font-extrabold text-special">
                  {elem.title}
                </div>
                {elem.subdesc.map((sub, index) => (
                  <div key={index} className="desc-special col-md-3 mx-auto">
                    <p>{sub.desc}</p>
                    <ul>
                      {sub.subdesc &&
                        sub.subdesc
                          .split(';')
                          .map((bullet, idx) => <li key={idx}>{bullet}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full">
                <div className="py-16 text-5xl font-extrabold">
                  {elem.title}
                </div>
                {elem.subdesc.map((sub, index) => (
                  <div key={index} className="desc">
                    {sub.desc}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Description;
