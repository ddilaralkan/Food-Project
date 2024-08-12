import React from 'react'
import AboutImg from '../assets/aboutimage.jpg';
import AboutStyles from '../styles/About.css';
function About() {
  return (
    <div className='about'>
     <div className='aboutTop' style={{backgroundImage : `url(${AboutImg})`}}></div>
     <div className='aboutBottom'>
      <h2>HAKKIMIZDA</h2>
      <p>Herkese kaliteli, lezzetli, ulaşılabilir fiyatta bir yemeği kendini iyi hissedebileceği mekanlarda sunma misyonuyla yola çıktık ve ilk Tavuk Dünyası restoranımızı 2012 yılı şubat ayında İstanbul’da açtık. Tarifi bizde saklı eşsiz soslar ve çeşit çeşit baharatlarla, 12-14 saat marine ettiğimiz tavuklarımız, kişiye özel tavalarda hazırlanarak muhteşem bir lezzet hikayesine dönüştü ve Uluslararası Lezzet Enstitüsü tarafından Üstün Lezzet Ödülleri’ne layık görüldü.
        ‘Fast-Casual’ restoran deneyiminin Türkiye’deki öncülerinden olarak, bugün Türkiye’nin 55 şehrinde, 310’u aşkın lezzet noktamızda, KKTC’de ve İspanya’da tavuk ağırlıklı menülerimizi misafirlerimizle buluşturuyoruz.
        Ankara’da yer alan yüksek standartlardaki üretim merkezimiz, restoran operasyon yönetim sistemimiz, geniş dağıtım ağımız ve franchising modelimiz ile Türkiye’de yeme-içme sektörünün öncü restoran zincirlerinden biri olmanın gururunu yaşıyoruz. 2015 yılında, Türkiye'nin önde gelen özel sermaye fonlarından Global Restaurant Investments S.A.R.L.’nin yatırım yapmasıyla Tavuk Dünyası olarak büyüme ve kurumsallaşmada ivme kazandık. Başarımızı uluslararası boyuta taşımak amacıyla oluşturduğumuz “Gagawa” markamızla yurt dışında da faaliyet göstermekteyiz.</p>
     </div>
    </div>
  )
}

export default About
