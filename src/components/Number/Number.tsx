import { LiaPhoneSolid } from 'react-icons/lia';

import styles from './Number.module.scss';

interface Props {
  className?: string;
}

const Number: React.FC<Props> = ({className}) => {

  const stylesText = `${styles.link} ${className ? className : ''}`

  return (
    <a
      href="tel:+380632212626"
      aria-label="Зателофонувати нам"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={stylesText}
    >
      <LiaPhoneSolid className={styles.icon} />
      <p className={styles.text}>+38 063 221 26 26</p>
    </a>
  );
};

export default Number;
