import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/icons/header-logo.svg';
import Container from '../Container/Container';
import Social from '../Social/Social';
import Typography from '../Typography/Typography';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapperFooter}>
          <div className={styles.wrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010.2987295776562!2d30.472517665975417!3d50.35175584728834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c86e49b60631%3A0x8817928bbd0dfed8!2sFPS.UA%20Riding%20and%20driving%20School!5e0!3m2!1suk!2sua!4v1697197384215!5m2!1suk!2sua"
              className={styles.map}
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.wrapperContact}>
              <Link href="/" className={styles.logo}>
                <Image src={logo} alt="Logo FPS.ua" priority />
              </Link>
              <Typography color="var(--cl-white)" variant='bodyC'>
                Україна, м.Київ <br /> вул. Метрологічна, 14В
              </Typography>
              <Typography color="var(--cl-orange)" variant='bodyC' className={styles.number}>
                +380 50 351 12 14
              </Typography>
              <Social className={styles.social}/>
            </div>
          </div>
          <Typography color="var(--cl-white)" className={styles.rights}>
            © 2022. FPS Solutions. All Rights Reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
