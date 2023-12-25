import Image from 'next/image';
import Link from 'next/link';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import autoImg from '@images/compass/auto.jpg';
import driftImg from '@images/compass/drift.jpg';
import enduroImg from '@images/compass/enduro.jpg';
import sportImg from '@images/compass/sport.jpg';
import svg from '@images/compass/svg.svg';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Compass.module.scss';

const data = [
  {
    id: 1,
    title: 'Мотошкола',
    description:
      'Впевненість та безпека в будь яких дорожніх умовах. За 12 тренувань опануй навички, що стануть базою твого нового захоплення та новою філософією їзди.',
    image: sportImg,
    href: '',
  },
  {
    id: 2,
    title: 'Крос ендуро',
    description:
      'Без меж та кордонів, поринь в новий рівень свободи. Тривимірна їзда, єднання із природою, мандрівки та приємні фізичні навантаження - челендж, що сподобається тобі.',
    image: enduroImg,
    href: '',
  },
  {
    id: 3,
    title: 'Дрифт',
    description:
      'Видовищний та вкрай фановий вид спорту. Людина що вміє викликати занос ніколи в нього “раптово” і неочікувано не попадає.',
    image: driftImg,
    href: '',
  },
  {
    id: 4,
    title: 'Автошкола',
    description:
      'Контраварійне або екстремальним водіння - та основа, що має бути в кожного водія, чи ви тільки сідаєте за кермо, чи ви маєте десятки років досвіду.',
    image: autoImg,
    href: '',
  },
  // {
  //   id: 5,
  //   title: 'Діти',
  //   description:
  //     'Адреналін, швидкість, переога - наші кольори! Більше ніж команда, це родина на трасі!',
  //   image: driftImg,
  //   href: '',
  // },
    // {
  //   id: 6,
  //   title: 'Турист',
  //   description:
  //     'Адреналін, швидкість, переога - наші кольори! Більше ніж команда, це родина на трасі!',
  //   image: driftImg,
  //   href: '',
  // },
];

const Compass = () => {
  return (
    <div id="Compass">
      <Section className={styles.section}>
        <Title>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-white)"
          >
            Наші направлення
          </Typography>
        </Title>
        <Container>
          {/* <h2>Navigation section</h2> */}
          <div className={styles.wrapper}>
            {data.map((direction: any) => (
              <>
                <Link href={direction.href} className={styles.link}>
                  <div className={styles.card}>
                    <Image
                      src={direction.image}
                      alt="candle"
                      className={styles.image}
                      priority
                    />
                    <div className={styles.gradient}></div>
                    <div className={styles.wrapperText}>
                      <div className={styles.wrapperDirection}>
                        <Typography
                          variant="subheadingT"
                          className={styles.direction}
                        >
                          {direction.title}
                        </Typography>
                        <Image
                          src={svg}
                          alt="Фон заголовку"
                          priority
                          className={styles.background}
                        />
                      </div>
                      <Typography
                        variant="bodyD"
                        color="var(--cl-white)"
                        className={styles.text}
                      >
                        {direction.description}
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <SlArrowRight className={styles.icon} />
                    <Typography
                      variant="bodyL"
                      color="var(--cl-white)"
                      className={styles.text}
                    >
                      Детально
                    </Typography>
                    <SlArrowLeft className={styles.icon} />
                  </div>
                </Link>
              </>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Compass;
