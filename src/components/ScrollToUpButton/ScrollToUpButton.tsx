'use client';

import { MdArrowUpward } from "react-icons/md";
import ScrollToUp from 'react-scroll-up';

import styles from './ScrollToUpButton.module.scss';

const ScrollToUpButton = () => {

  return (
    <div className={styles.wrapper}>
      <ScrollToUp showUnder={140}>
        <div className={styles.btn}>
          <MdArrowUpward className={styles.icon} />
        </div>
      </ScrollToUp>
    </div>
  );
};

export default ScrollToUpButton;
