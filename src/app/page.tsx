import AboutUs from '@components/components/AboutUs/AboutUs';
import Advantages from '@components/components/Advantages/Advantages';
import Contacts from '@components/components/Contacts/Contacts';
// import Gallery from '@components/components/Gallery/Gallery';
import Hero from '@components/components/Hero/Hero';
import Reviews from '@components/components/Reviews/Reviews';
import Team from '@components/components/Team/Team';

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
