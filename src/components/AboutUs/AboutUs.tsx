'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import aboutUs from '@images/aboutUs/AboutUs.jpg';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './AboutUs.module.scss';

const data = [
  {
    title: 'Чим ми займаємось?',
    description: [
      'Із 2008 року навчаємо безпеці та культурі ефективного водіння. Починаючи від тих кто перший раз сідає на авто чи мото та закінчуючи  підготовкою до перегонів.',
    ],
  },
  {
    title: 'Чому різні напрямкі?',
    description: [
      'Із самого початку, із 2005р,  засновники та тренери мали досвід як в авто перегонах, так і мото. Фундаментальні курси авто і мото мають багато спільного. Тож це робить наші знання та компетенції більш глибокими та різноманітними, водночас. ',
    ],
  },
  {
    // title: 'Які продукти ми пропонуємо:',
    title: 'Наші продукти:',
    description: [
      '- Авто школа',
      '- Дрифт школа',
      '- Мотошкола дорожня',
      '- Крос/ендуро школа',
      '- Мото школа дитяча',
    ],
  },
  {
    // title: 'Що входить в навчальний курс?',
    title: 'Наш навчальний курс?',
    description: [
      'Це система коротких лекцій, вводних і вправ на тренуваннях, що формують базові навички, надійну основу, і згодом необхідний арсенал скілів для кожної дисципліни. Більш детально читайте інфу по відповідному продукту.',
    ],
  },
  {
    title: 'Як попасти на заняття?',
    description: [
      'Працюємо без вихідних, світовий день! Заняття персональні, немає груп, чи розкладів. Тому - зручним способом - +380632212626, або t.me/FPSon, або залишайте заявку.',
    ],
  },
  {
    title: 'Цінова політика?',
    description: [
      'Ціни на кожен продукт ви зможете детально подивитись в розділах. Але загалом, базовий курс під ключ, комплексно обійдеться на рівні ~800$, як для авто так і для мото. ',
    ],
  },
  {
    title: 'Як купити пакетом?',
    description: [
      'Так, при купівлі курсу, відразу як правило, ви отримуєте 20%, або 2 тренування зверху.',
    ],
  },
  {
    title: 'Що означає назва - FPS?',
    description: [
      "Тут зашифровані основні принципи, або ключі до якісного та безпечного водіння. Як пам'ятка 🙂.",
      'Focus - де ваш погляд, та увага.',
      'Position/Perception - ваша посадка/стойка, та якість сприйняття інфи від дороги. Друге більше актуально для авто, перше - для мото.',
      'Smoothness - ваша плавність та точність на органах керування.',
    ],
  },
];

const AboutUs = () => {

  const { width } = useWindowSize();

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>(
    Array(data.length).fill(null)
  );

  const handleToggle = (index: number) => {
    setOpenIdx(prev => (prev === index ? null : index));
  };

  const setHeight = (index: number) => {
    if (contentRefs.current[index]) {
      return contentRefs.current[index]?.scrollHeight;
    }
    return 0;
  };

  return (
    <div id="AboutUs">
      <Section className={styles.section}>
        <Container>
          {/* <h2>AboutUs section</h2> */}
          <div className={styles.wrapper}>
            <div className={styles.wrapperImage}>
              <Image
                src={aboutUs}
                alt="aboutUs"
                className={styles.image}
                priority
              />
              <div className={styles.gradient}></div>
            </div>
            {/* <Container className={styles.wrapperText}> */}
            <div className={styles.wrapperHading}>
              <Typography variant="subheading1" className={styles.hading}>
                Про школу:
              </Typography>
              <ul className={styles.list}>
                {data.map((item, index) => (
                  <li className={styles.item} key={item.title}>
                    <div
                      className={styles.label}
                      onClick={() => handleToggle(index)}
                    >
                      <FaCircle className={styles.icon} />
                      <Typography variant="subheading3" className={styles.tag}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subheading3"
                        color="var(--cl-orange)"
                        className={`${styles.arrow} ${
                          openIdx === index ? styles.active : ''
                        }`}
                      >
                        &#62;
                      </Typography>
                    </div>
                    <div
                      className={`${styles.description} ${
                        index === openIdx ? styles.visible : ''
                      }`}
                      style={{
                        height:
                          width < 1024
                            ? openIdx === index
                              ? setHeight(index)
                              : 0
                            : 'auto',
                      }}
                    >
                      <div
                        className={styles.wrapperText}
                        ref={el => (contentRefs.current[index] = el)}
                      >
                        {item.description.map((text, index) => (
                          <Typography
                            variant="bodyC"
                            key={index}
                            className={styles.text}
                          >
                            {text}
                          </Typography>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* </Container> */}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutUs;
