import AboutUs from '@components/AboutUs/AboutUs';
import Advantages from '@components/Advantages/Advantages';
import Contacts from '@components/Contacts/Contacts';
// import Gallery from '@components/Gallery/Gallery';
import Hero from '@components/Hero/Hero';
import Reviews from '@components/Reviews/Reviews';
import Team from '@components/Team/Team';

import Compass from '../components/Compass/Compass';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Compass />
      <Team />
      {/* <Gallery /> */}
      <Advantages />
      <Reviews />
      <Contacts />
    </>
  );
}
