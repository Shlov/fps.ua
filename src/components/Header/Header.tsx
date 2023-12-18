'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { LiaPhoneSolid } from 'react-icons/lia';
import { useWindowSize } from 'usehooks-ts';

import logo from '../../../public/images/icons/header-logo.svg';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Social from '../Social/Social';
import Typography from '../Typography/Typography';

import styles from './Header.module.scss';
import Number from '../Number/Number';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isSmallScreen = width < 1230;
  const isBurgerScreen = width < 1024;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const listLink = [
    {
      title: 'Про нас',
      link: '#AboutUs',
    },
    { title: 'Наші направлення', link: '#Compass' },
    { title: 'Наша команда', link: '#Team' },
    { title: 'Контакти', link: '#Contacts' },
  ];

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo FPS.ua" priority />
        </Link>
        <nav>
          <ul className={styles.nav}>
            {listLink.map(link => (
              <li key={link.link}>
                <Link href={link.link}>
                  <Typography color="var(--cl-white-06)">
                    {link.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isBurgerScreen && (
          <li className={styles.iconsItem}>
            <button className={styles.menuIcon} onClick={toggleMenuOpen}>
              {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </li>
        )}
        {!isSmallScreen && (
          <div className={styles.call}>
            <Typography color="var(--cl-white-06)">
              Приєднуйся до нашої команди!
            </Typography>
            <Number/>
          </div>
        )}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <ul className={styles.list}>
            {listLink.map(link => (
              <li key={link.link}>
                <Link href={link.link}>
                  <Typography variant="subheading2" color="var(--cl-white)">
                    {link.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.wrapper}>
            <Social />
            <a
              href="tel:+380632212626"
              aria-label="Зателофонувати нам"
              target="_b"
              rel="noopener noreferrere"
              // className={styles.link}
            >
              <Button variant="primary">+38(063)221 2626</Button>
            </a>
            <a
              href="https://t.me/+380632212626"
              aria-label="Зв'язок через Telegram"
              target="_b"
              rel="noopener noreferrere"
              className={styles.link}
            >
              <BiLogoTelegram />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
