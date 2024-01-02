'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import heroBg from '@images/hero/hero.jpg';

import { inter } from '../../app/fonts';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import heroCards from './heroCards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Hero.module.scss';

const sliderSettings: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  arrows: false,
  draggable: true,
  swipe: true,
  appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
  dotsClass: styles['dots'],
  customPaging: () => <button></button>,
};

const Hero = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const disablePrevButton = currentSlide === 0;
  const disableNextButton = currentSlide === heroCards.length - 1;

  const handlePrevClick = () => {
    if (!disablePrevButton && sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (!disableNextButton && sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(prev => prev + 1);
    }
  };

  const data = {
    heading: [
      // '*Навички *рух *контроль',
      'Нові навички та рівень контролю із',
      'першого заняття.',
      // 'Нові задоволення',
      // 'Знайди своє!',
    ],
    subheading: ['Авто та мото тренінги.', 'Від нуля до досконалості.'],
  };

  return (
    <>
      <Section className={styles.sectionWrapper}>
        <Image
          src={heroBg}
          className={styles.image}
          alt="Background Image"
          quality={100}
          priority
          // fill
          sizes="(min-width: 1230) 1200px,
            (min-width: 1024) 976px,
            (min-width: 768px) 720px,
            (min-width: 667px) 619px,
            327px"
        />
        <div className={styles.gradient}>
          <Container className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.heading}>
                <div className={styles.wrapperHeading}>
                  <Typography
                    variant="heading1"
                    className={inter.className}
                    color="var(--cl-white)"
                  >
                    {data.heading[0]}
                  </Typography>
                  {/* <div className={styles.wrapperHeading}> */}
                  <Typography
                    variant="heading1"
                    className={inter.className}
                    color="var(--cl-orange)"
                  >
                    {data.heading[1]}
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={inter.className}
                    color="var(--cl-white)"
                  >
                    {data.heading[2]}
                  </Typography>
                  {/* </div> */}
                  <Typography
                    variant="heading1"
                    className={inter.className}
                    color="var(--cl-orange)"
                  >
                    {data.heading[3]}
                  </Typography>
                </div>
                <div className={styles.wrapperSubheading}>
                  <Typography
                    variant="heading2"
                    className={inter.className}
                    color="var(--cl-white)"
                  >
                    {data.subheading[0]}
                  </Typography>{' '}
                  <Typography
                    variant="heading2"
                    className={inter.className}
                    color="var(--cl-white)"
                  >
                    {data.subheading[1]}
                  </Typography>
                </div>
              </div>
              <Button variant="primary">Запланувати пробне заняття</Button>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
};

export default Hero;
