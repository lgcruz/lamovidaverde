// pages/index.tsx

import { Fragment } from 'react';
import LandingPage from '../components/Home/LandingPage';

const Data = {
  carouselList: [
    {
      title: 'Compostaje',
      description: '📰Sabías que 1kg de residuos orgánicos se transforman en 30 gr de compost♻️?\n\n'+ 
        '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',
      src: 'https://scontent.fuio7-1.fna.fbcdn.net/v/t39.30808-6/277589848_1387079018417955_6579527339144921432_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeF3h0H4ArvvZHJAgHhWcge0e6RpiqbzxSJ7pGmKpvPFIk3yJCAVdZrIymPMAc4yeac&_nc_ohc=TjzKlrOPqvoAX90OpuK&_nc_ht=scontent.fuio7-1.fna&oh=00_AT_84ZZxesAnSPiOwRuX9DgmkZ0-M73nWSFCud6qHCmbiA&oe=62A930F5',
    },
    {
      title: 'Compostera',
      description: '📰Sabías que 1kg de residuos orgánicos se transforman en 30 gr de compost♻️?\n\n'+ 
        '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',
      src: 'https://scontent.fuio7-1.fna.fbcdn.net/v/t39.30808-6/277744570_1388920984900425_1719625747320505115_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGEeQS7DKJI7sZMHViIVUdJxc30Sgj4wM7FzfRKCPjAzmtgHiyGN9b5y1ijlTICeN0&_nc_ohc=PK0rHbCEgkIAX8JmYa0&tn=oF12FPwdSfFxGJp-&_nc_ht=scontent.fuio7-1.fna&oh=00_AT9XviK_Gz6vaUitnryXIVwOG8vh5g_xfxkkqpozTt1cPQ&oe=62AA521B'
   }
  ]
}

function HomePage() {
  return (
    <Fragment>
      <LandingPage name='La Movida Verde' carouselList={Data.carouselList} />
    </Fragment>
  );
}


export default HomePage;
