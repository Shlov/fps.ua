'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FaCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import Arrow from '@images/team/noun-right-928773.svg';
import team from '@images/team/team.jpg';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Team.module.scss';

const text = [
  {
    id: 1,
    coach: { firstName: 'Олег', lastName: 'Репницький' },
    description: [
      '25.07.1983',
      'Призер клубних ралі, та досвід в мотокросі.',
      'Із 2008 року досвід викладання та тренерської роботи. Авто та мото направлень.',
      'Автор методології та навчальних програм. Займається підготовкою тренерів та створенням і розвитком нових навчальних курсів та направлень.',
      'Менеджер школи, ідейна рушійна сила.',
    ],
  },
  {
    id: 2,
    coach: { firstName: 'Сергій', lastName: 'Ермоленко' },
    description: [
      '12.08.1988',
      'З 8 років на мотоциклі, із 20 на дорогах загального користування, із постійною практикою в місті й подорожах.',
      'Стал КМС',
      'Багаторазовий призер в ШКМГ та мотокросі. Має розряд - КМС.',
      'Призер та чемпіон в хобі-картингу та RTR Time Attack.',
      'Спеціалізована освіта, кваліфікація та понад 10 років досвіду тренерської роботи.',
    ],
  },
  {
    id: 3,
    coach: { firstName: 'Ігор', lastName: 'Федорчук' },
    description: [
      '15.10.1989',
      'Тренер дорожнього, туристичного, крос та ендуро напрямків. Працює з дітьми та особливо любить готувати аматорів до змагань.',
      'Тренерський стаж  – 8 років.',
      'Призер Кубка України з мотокросу КМС.',
      'Учасник Чемпіонату Європи та Кубків Центральної Європи.',
      'Сертифікований тренер з мотокросу та мотоциклетної фіз.підготовки МХ GP Academy.',
    ],
  },
];

const Team = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div id="Team">
      <Section className={styles.section}>
        <Container className={styles.container}>
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
          <div className={styles.wrapperList}>
            <Typography
              variant="subheading1"
              className={styles.subheading}
              color="var(--cl-black)"
            >
              Наша команда
            </Typography>
            <Image
              src={Arrow}
              alt="Стрілка Вказує на імя стренера"
              className={styles.arrow}
            />
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
                      // color="var(--cl-white)"
                    >{`${t.coach.firstName} ${t.coach.lastName}`}</Typography>
                    {t.description.map((item: string, index: number) => (
                      <div key={index} className={styles.wrapperText}>
                        <div className={styles.wrapperIcon}>
                          <FaCircle className={styles.icon} />
                        </div>
                        <Typography variant="bodyB" className={styles.text}>
                          {item}
                        </Typography>
                      </div>
                    ))}
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Team;
