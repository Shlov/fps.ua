'use client';

import Slider, { Settings } from 'react-slick';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import img1 from '@images/gallery/image 20.jpg';
import img2 from '@images/gallery/image 21.jpg';

import styles from './Gallery.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';

const galleryData = [
  {
    id: 1,
    image: img1,
    alt: 'foto',
  },
  {
    id: 2,
    image: img2,
    alt: 'foto',
  },
  {
    id: 3,
    image: img1,
    alt: 'foto',
  },
  {
    id: 4,
    image: img2,
    alt: 'foto',
  },
  {
    id: 5,
    image: img1,
    alt: 'foto',
  },
  {
    id: 6,
    image: img2,
    alt: 'foto',
  },
  {
    id: 7,
    image: img1,
    alt: 'foto',
  },
  {
    id: 8,
    image: img2,
    alt: 'foto',
  },
  {
    id: 9,
    image: img1,
    alt: 'foto',
  },
];

const sliderSettings: Settings = {
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
  // dotsClass: `${styles.dots} ${dotsStyles}`,
  // dotsClass: styles.dots,
  // customPaging: () => <Paging />
  // customPaging: () => <div className={styles.paging}></div>,
};

const Gallery = () => {
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
    // <Section>
    //   <Title>
    //     <Typography variant="subheading1" className={styles.title} color="var(--cl-white)">
    //       Галерея
    //     </Typography>
    //   </Title>
    // </Section>
    <Container className={styles.container}>
      <>
        <ul className={styles.list}>
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            infinite={true}
            dots
            // afterChange={(index: number) => handleSmallImageClick(index)}
          >
            {galleryData.map(({ id, image, alt }) => (
              <li key={id} className={styles.item}>
                <Image src={image} alt={alt} className={styles.image} />
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
      </>
    </Container>
  );
};

export default Gallery;
