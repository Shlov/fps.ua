import heroBg from '@images/hero/hero.jpg';

export interface HeroContent {
  id: number;
  backgroundImage: string;
  heading1: string;
  heading2: string;
  buttonText: string;
}

const heading1 = 'Кермуй своїм життям';

const heading2 = 'Здобудь впевненність';

const buttonText = 'Записатись на пробне зайняття';

const heroCards: HeroContent[] = [
  {
    id: 1,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    buttonText,
  },
  {
    id: 2,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    buttonText,
  },
  {
    id: 3,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    buttonText,
  },
];

export default heroCards;
