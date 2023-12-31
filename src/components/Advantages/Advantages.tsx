'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Slider, { Settings } from 'react-slick';

import advantagesImg from '../../../public/images/advantages/advantages.gif';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Advantages.module.scss';

const advantages = [
  {
    number: 1,
    text: 'Вже понад 15 років навчальні програми вдосконалюються і перевіряються практикою, а це більш ніж 2500 клієнтів. Тренери дуже добре розуміють відповідальність та ризики які несуть клієнти виїжджаючи на дороги. Тож тренуємо кожного із максимальною віддачею, для досягнення потужних і стабільних навичок.',
  },
  {
    number: 2,
    text: 'Всі тренери команди мають широкий досвід як в спорті, мандрівках, повсякденні, так і розширюють свої знання. Це дає глибокий рівень розуміння і взаємодії як із міським трафіком, так і з треком. До того зацікавленість та бажання бачити впевнено й успішно їдучих студентів - запорука якості. ',
  },
  {
    number: 3,
    text: 'Автодром “Феофанія” дозволяє працювати зі швидкостями і різноманітно. Має великий трек, асфальтований майданчик, для безпечних вправ контраварійних. Грунтові траси для кросу, та ліс для ендуро. І все це в одній локації зі зручною логістикою.',
  },
  {
    number: 4,
    text: 'Різноманітний вибір сучасної техніки дозволяє спробувати різні класи, різні дисципліни. Обрати для себе що підходить, на практиці зрозуміти, що ближче, комфортно і заходить. Для прийняття рішення в подальшому.',
  },
  {
    number: 5,
    text: 'Саме різновекторність, і можливість працювати із різними дисциплінами (авто, мото і т.д.) дозволяє Вам закрити всі потреби для себе друзів та близьких з навчання в комфортних умовах із перевіреними вже тренерами й в одній локації.',
  },
];

const sliderSettings: Settings = {
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
  appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
  dotsClass: styles.dots,
  customPaging: () => <div className={styles.paging}></div>,
};

const Advantages = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Section>
      <Container>
        <Title>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-white)"
          >
            Ключеві переваги
          </Typography>
        </Title>
        {/* <Container> */}
        <div className={styles.wrapper}>
          <div className={styles.wrapperList}>
            <ul className={styles.list}>
              <Slider
                {...sliderSettings}
                ref={sliderRef}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                dots
              >
                {advantages.map(advantage => (
                  <li key={advantage.number} className={styles.item}>
                    <Typography className={styles.num}>
                      {/* {`# ${advantage.number}`} */}
                      <span>#</span>
                      {advantage.number}
                    </Typography>
                    <Typography variant="bodyA" className={styles.text}>
                      {advantage.text}
                    </Typography>
                  </li>
                ))}
              </Slider>
            </ul>

            <div className={styles.wrapperArrows}>
              <button
                onClick={handlePrevClick}
                aria-label="prev"
                className={styles.btn}
              >
                <SlArrowLeft className={styles.icon} />
              </button>
              <button
                onClick={handleNextClick}
                aria-label="next"
                className={styles.btn}
              >
                <SlArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
          <Image
            src={advantagesImg}
            alt="Відео наших занять"
            className={styles.gif}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Advantages;
