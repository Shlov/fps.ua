import Image from 'next/image';
import Link from 'next/link';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import driftImg from '../../../public/images/compass/drift.jpg';
import enduroImg from '../../../public/images/compass/enduro.jpg';
import sportImg from '../../../public/images/compass/sport.jpg';
import svg from '../../../public/images/compass/svg.svg';
import touristImg from '../../../public/images/compass/tourist.jpg';
// import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Compass.module.scss';

const data = [
  {
    id: 1,
    title: 'Мотошкола',
    description:
      'На трасі не має меж - ми покоряємо дорогу разом! Ласкаво просиммо до команди мрії!',
    image: sportImg,
    href: '',
  },
  {
    id: 2,
    title: 'Крос ендуро',
    description:
      'Ми не лише їдемо - ми летимо на мріях із вітром у волоссі! Приєднуйся до нашої команди!',
    image: enduroImg,
    href: '',
  },
  {
    id: 3,
    title: 'Дрифт',
    description:
      'Адреналін, швидкість, переога - наші кольори! Більше ніж команда, це родина на трасі!',
    image: driftImg,
    href: '',
  },
  {
    id: 4,
    title: 'Автошкола',
    description:
      'Разом ми не переможні - спортивних дух в наших серцях! Ласкавао просимо в велику родину!',
    image: touristImg,
    href: '',
  },
  {
    id: 6,
    title: 'Діти',
    description:
      'Адреналін, швидкість, переога - наші кольори! Більше ніж команда, це родина на трасі!',
    image: driftImg,
    href: '',
  },
];

const Compass = () => {
  return (
    <div id="Compass">
      <Section>
        <Title>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-white)"
          >
            Наші направлення
          </Typography>
        </Title>
        {/* <Container> */}
        {/* <h2>Navigation section</h2> */}
        <div className={styles.wrapper}>
          {data.map((direction: any) => (
            <>
              <Link href={direction.href}>
                <div className={styles.card}>
                  <Image
                    src={direction.image}
                    alt="candle"
                    className={styles.image}
                    //   sizes="(min-width: 1230) 588px,
                    // (min-width: 1024) 480px,
                    // (min-width: 768px) 352px,
                    // (min-width: 667px) 619px,
                    // 327px"
                    // fill
                    priority
                  />
                  <div className={styles.gradient}>
                    <div className={styles.wrapperText}>
                      <div className={styles.wrapperDirection}>
                        <Typography
                          variant="subheadingT"
                          color="var(--cl-orange)"
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
                        // className={styles.text}
                      >
                        {direction.description}
                      </Typography>
                    </div>
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
        {/* </Container> */}
      </Section>
    </div>
  );
};

export default Compass;
