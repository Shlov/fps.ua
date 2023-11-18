import { BiLogoFacebook, BiLogoTiktok } from 'react-icons/bi';
import { FaInstagram,FaYoutube } from 'react-icons/fa';

// import { FaFacebookF, FaInstagram, FaTiktok,FaYoutube } from 'react-icons/fa';
// import { IoLogoFacebook } from 'react-icons/io';
import styles from './Social.module.scss';

// const SocialVariant = {
//   orange: 'VARIANT_1',
//   white: 'VARIANT_2',
// } as const;

interface Props {
  // variant?: keyof typeof SocialVariant;
  className?: string;
}

const Social: React.FC<Props> = ({
  // variant,
  className
}) => {
  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={styles.item}>
        <a
          href="https://www.facebook.com/FPS.UA"
          className={styles.link}
          aria-label="Посилання на facebook"
          target="_b"
          rel="noopener noreferrere"
        >
          <BiLogoFacebook />
          {/* <IoLogoFacebook /> */}
          {/* <FaFacebookF /> */}
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.instagram.com/fps_ua"
          className={styles.link}
          aria-label="Посилання на facebook"
          target="_b"
          rel="noopener noreferrere"
        >
          <FaInstagram />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.tiktok.com/@fps.ua"
          className={styles.link}
          aria-label="Посилання на facebook"
          target="_b"
          rel="noopener noreferrere"
        >
          {/* <FaTiktok /> */}
          <BiLogoTiktok />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.youtube.com/FPS.UA"
          className={styles.link}
          aria-label="Посилання на facebook"
          target="_b"
          rel="noopener noreferrere"
        >
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default Social;
