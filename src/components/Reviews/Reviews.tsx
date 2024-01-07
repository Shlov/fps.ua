'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { MdStarRate } from 'react-icons/md';
import { PiQuotes } from 'react-icons/pi';
import Slider, { Settings } from 'react-slick';
import Button from '@components/Button/Button';
import CallbackForm from '@components/CallbackForm/CallbackForm';
import Modal from '@components/Modal/Modal';
import foto from '@images/reviews/Ellipse.png';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Reviews.module.scss';

type dataI = {
  name: string;
  image: any;
  time: string;
  stars: string;
  description: string;
  link: string;
}[];

const data: dataI = [
  {
    name: 'Marian Kitsenko',
    image: foto,
    time: 'місяць назад',
    stars: '5',
    description:
      'Друзі подарували сертифікат на курс по мотоциклу. Олег - дуже хороший інструктор, професіонал своєї справи та просто приємний у спілкуванні, що дуже рідко зустрічається. Заняття пройшло легко і продуктивно, однозначно рекомендую.',
    link: 'https://maps.app.goo.gl/73w6rqL9GV3WSfJ16',
  },
  {
    name: ' Андрей Примаченко',
    image: foto,
    time: 'тиждень тому',
    stars: '5',
    description:
      'Дуже вдячний Олегу за урок дрифту, чудовий інструктор, відмінне пояснення теорії. Із задоволенням приїду ще!',
    link: 'https://maps.app.goo.gl/X3ntf7YxcydBe3eD7',
  },
  {
    name: ' Ярослав Шпортило',
    image: foto,
    time: '2 роки тому',
    stars: '5',
    description:
      'Хороша школа для вдосконалення навичок водіння мотоциклом. Уже мав досвід керування. Займаюся з Олегом. Доступно пояснює і показує кожен рух і маневр. З детальністю пропрацьовує всі твої правильні або не правильні дії для ідеального керування мото. Нічого лишнього. Рекомендую!',
    link: 'https://maps.app.goo.gl/eagxY6WatHqNCBXJ9',
  },
  {
    name: 'Marian Kitsenko',
    image: foto,
    time: 'місяць назад',
    stars: '5',
    description:
      'Друзі подарували сертифікат на курс по мотоциклу. Олег - дуже хороший інструктор, професіонал своєї справи та просто приємний у спілкуванні, що дуже рідко зустрічається. Заняття пройшло легко і продуктивно, однозначно рекомендую.',
    link: 'https://maps.app.goo.gl/73w6rqL9GV3WSfJ16',
  },
  {
    name: ' Андрей Примаченко',
    image: foto,
    time: 'тиждень тому',
    stars: '5',
    description:
      'Дуже вдячний Олегу за урок дрифту, чудовий інструктор, відмінне пояснення теорії. Із задоволенням приїду ще!',
    link: 'https://maps.app.goo.gl/X3ntf7YxcydBe3eD7',
  },
  {
    name: ' Ярослав Шпортило',
    image: foto,
    time: '2 роки тому',
    stars: '5',
    description:
      'Хороша школа для вдосконалення навичок водіння мотоциклом. Уже мав досвід керування. Займаюся з Олегом. Доступно пояснює і показує кожен рух і маневр. З детальністю пропрацьовує всі твої правильні або не правильні дії для ідеального керування мото. Нічого лишнього. Рекомендую!',
    link: 'https://maps.app.goo.gl/eagxY6WatHqNCBXJ9',
  },
  {
    name: 'Marian Kitsenko',
    image: foto,
    time: 'місяць назад',
    stars: '5',
    description:
      'Друзі подарували сертифікат на курс по мотоциклу. Олег - дуже хороший інструктор, професіонал своєї справи та просто приємний у спілкуванні, що дуже рідко зустрічається. Заняття пройшло легко і продуктивно, однозначно рекомендую.',
    link: 'https://maps.app.goo.gl/73w6rqL9GV3WSfJ16',
  },
  {
    name: ' Андрей Примаченко',
    image: foto,
    time: 'тиждень тому',
    stars: '5',
    description:
      'Дуже вдячний Олегу за урок дрифту, чудовий інструктор, відмінне пояснення теорії. Із задоволенням приїду ще!',
    link: 'https://maps.app.goo.gl/X3ntf7YxcydBe3eD7',
  },
  {
    name: ' Ярослав Шпортило',
    image: foto,
    time: '2 роки тому',
    stars: '5',
    description:
      'Хороша школа для вдосконалення навичок водіння мотоциклом. Уже мав досвід керування. Займаюся з Олегом. Доступно пояснює і показує кожен рух і маневр. З детальністю пропрацьовує всі твої правильні або не правильні дії для ідеального керування мото. Нічого лишнього. Рекомендую!',
    link: 'https://maps.app.goo.gl/eagxY6WatHqNCBXJ9',
  },
];

const sliderSettings: Settings = {
  autoplay: false,
  autoplaySpeed: 8000,
  appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
  // dotsClass: `${styles.dots} ${dotsStyles}`,
  dotsClass: styles.dots,
  // customPaging: () => <Paging />
  customPaging: () => <div className={styles.paging}></div>,
};

const Reviews = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { width } = useWindowSize();
  const isDesktopScreen = width < 1024;

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevIsModal => !prevIsModal);
  };

  return (
    <Section>
      <Container className={styles.container}>
        <Title>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-white)"
          >
            Відгуки
          </Typography>
        </Title>
        <div className={styles.wrapperSlider}>
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            infinite={true}
            slidesToShow={isDesktopScreen ? 1 : 3}
            slidesToScroll={isDesktopScreen ? 1 : 3}
            dots
          >
            {data.map(item => (
              <div key={item.name} className={styles.wrapper}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div className={styles.image}>
                      <Image
                        src={item.image}
                        alt={`Відгук ${item.name}`}
                        sizes="60px"
                      />
                    </div>
                    <div>
                      <Typography>{item.name}</Typography>
                      <Typography>{item.time}</Typography>
                      <div>
                        {[...Array(5)].map((e, i) => (
                          <MdStarRate key={i} className={styles.icon} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Typography className={styles.description}>
                    {item.description}
                  </Typography>
                  <div className={styles.footer}>
                    <Link
                      href={item.link}
                      className={styles.link}
                      aria-label="Посилання на facebook"
                      target="_b"
                      rel="noopener noreferrere"
                    >
                      VIA GOOGLE
                    </Link>
                    <PiQuotes className={styles.quote} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Button variant="primary" onClick={toggleModal} className={styles.btn}>
          Запланувати пробне заняття
        </Button>
        <Modal active={isModal} setActive={toggleModal}>
          <CallbackForm title="Записатись на навчання" onCloseModal={toggleModal}/>
        </Modal>
      </Container>
    </Section>
  );
};

export default Reviews;
