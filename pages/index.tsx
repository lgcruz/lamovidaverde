// pages/index.tsx

import { Fragment } from 'react';
import LandingPage from '../components/Home/LandingPage';

const Data = {
  carouselList: [
    {
      title: 'Compostaje',
      description: '📰Sabías que 1kg de residuos orgánicos se transforman en 30 gr de compost♻️?\n\n'+ 
        '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',
      src: 'https://i.ibb.co/hyr3FZG/desechos-Organicos.jpg',
    },
    {
      title: 'Compostera',
      description: '📰Sabías que 1kg de residuos orgánicos se transforman en 30 gr de compost♻️?\n\n'+ 
        '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',
      src: 'https://i.ibb.co/XXKVSrf/vermicompostera.jpg'
   }
  ]
}

{/* <img src="https://i.ibb.co/Mchz1n6/cascara-Guineo.jpg" alt="cascara-Guineo" border="0">
<img src="https://i.ibb.co/G3dPRRg/cascara-Naranja.jpg" alt="cascara-Naranja" border="0">
<img src="https://i.ibb.co/pbh4Lj2/pan-Mohoso.jpg" alt="pan-Mohoso" border="0">
<img src="https://i.ibb.co/8NsW20p/cascara-Pina.jpg" alt="cascara-Pina" border="0">
<img src="https://i.ibb.co/DYg1s8x/papel-Basura.jpg" alt="papel-Basura" border="0">
<img src="https://i.ibb.co/25T75Gj/sacoTe.jpg" alt="sacoTe" border="0">
<img src="https://i.ibb.co/t4r398R/cascara-Manzana.jpg" alt="cascara-Manzana" border="0">
<img src="https://i.ibb.co/934dzG2/cascara-Huevo.jpg" alt="cascara-Huevo" border="0">
<img src="https://i.ibb.co/hyr3FZG/desechos-Organicos.jpg" alt="desechos-Organicos" border="0">
<img src="https://i.ibb.co/XXKVSrf/vermicompostera.jpg" alt="vermicompostera" border="0">
<img src="https://i.ibb.co/PmG0wdV/la-movida-verde-logo.jpg" alt="la-movida-verde-logo" border="0"></img> */}

function HomePage() {
  return (
    <Fragment>
      <LandingPage name='La Movida Verde' carouselList={Data.carouselList} />
    </Fragment>
  );
}


export default HomePage;
