'use client';

import Image from 'next/image';
// import Link from 'next/link';
import { useRef } from 'react';
import { FaCircle } from 'react-icons/fa';
import Slider from 'react-slick';

import team from '../../../public/images/team/team.jpg';
// import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Team.module.scss';

const text = [
  {
    id: 1,
    coach: { firstName: 'Олег', lastName: 'Репницький' },
    description: [
      'Тренер дорожнього напрямку мотошколи FPS R.T.',
      'Учасник Кубка України з Мотокросу 2014-2016.',
      'Спеціалізація в мотошколі: базові рівні та інші спеціальні програми. Міська їзда. Ендуро, офроад, мотокрос. ',
      'Стаж – 15 років',
    ],
  },
  {
    id: 2,
    coach: { firstName: 'Сергій', lastName: 'Ермоленко' },
    description: [
      // 'В первый раз посадили за руль в 6 лет,спустя два года уже сам ездил за рулём Минска.',
      // 'Когда стал по старше, пересел за руль Явы 350 к годам 14.',
      // 'Первый раз сел за спорт байк в 18 - Honda CBR 954',
      // 'После купил в 2009 себе Cbr 600 rr первый мотоцикл',
      // 'В 2013 начал увлекаться мотоспортом (кольцевые гонки)',
      'В 2014 стал призером класса добьют на Yamaha r6',
      // 'Получил первый разряд',
      // 'В 2014 году начал увлекаться мотокроссом,чтоб больше себя раскрыть в мото кольцевых гонках',
      'В 2015 году ехал за команду MPS стал призёром Украины по кольцевым. Также представлял команду RST в Украине',
      'Стал КМС',
      'В конце 2015 году сильно увлёкся мотокроссом и стал первым в чемпионате Киева по мотокроссу на Yamaha yz250',
      'В 2016 году был призёром по мотокроссу города Киева',
      // 'В 2017 году увлёкся авто спортом',
      // 'В 2017 году призёр и чемпион по хобби картингу',
      'В 2018 году призёр по Tima Attack автомобиль Honda класс gt180',
      // 'Призёр по RTR в классе Классик  ,на ваз 1600',
      'В 2018 году призёр и чемпион по хобби картингу в гонке XXl',
      // 'В 2018 году призёр по картингу Time attack',
      // 'В 2019 году призёр Time Attack',
      'Тренировать начал в 2015 году',
    ],
  },
  {
    id: 3,
    coach: { firstName: 'Ігор', lastName: 'Федорчук' },
    description: [
      'Тренер дорожнього, туристичного, крос та ендуро напрямків. Працює з дітьми та особливо любить готувати аматорів до змагань.',
      'Тренерський стаж  – 8 років.',
      'Призер Кубка України з мотокросу КМС.',
      'Учасник Чемпіонату Європи та Кубків Центральної Європи.',
      'Сертифікований тренер з мотокросу та мотоциклетної фіз.підготовки МХ GP Academy. 15.10.1989 року випуску.',
    ],
  },
];

const Team = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div id="Team">
      <Section>
        {/* <h2 >Team section</h2> */}
        <Title className={styles.wrapperTitle}>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-black)"
          >
            Наша команда
          </Typography>
        </Title>
        <Image
          src={team}
          alt="team"
          className={styles.image}
          sizes="(min-width: 1230) 588px,
              (min-width: 1024) 480px,
              (min-width: 768px) 352px,
              (min-width: 667px) 619px,
              327px"
          // fill
          priority
        />
        {/* <Container> */}
        <ul className={styles.list}>
          <Slider
            // {...sliderSettings}
            ref={sliderRef}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            dots
          >
            {text.map((t: any) => (
              <li key={t.id} className={styles.item}>
                <Typography
                  variant="subheadingN"
                  className={styles.name}
                  color="var(--cl-white)"
                >{`${t.coach.firstName} ${t.coach.lastName}`}</Typography>
                {t.description.map((item: string, index: number) => (
                  <div key={index} className={styles.wrapperText}> 
                    <div className={styles.wrapperIcon}>

                    <FaCircle className={styles.icon} />
                    </div>
                    <Typography
                      variant="bodyB"
                      
                      className={styles.text}
                    >
                      {item}
                    </Typography>
                  </div>
                ))}
              </li>
            ))}
          </Slider>
        </ul>
        {/* </Container> */}
      </Section>
    </div>
  );
};

export default Team;
