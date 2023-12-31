import React, { FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  active: boolean;
  setActive: (value: SetStateAction<boolean>) => void;
}

const Modal: FC<ModalProps> = ({ children, className, active, setActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const originalOverflow = useRef<string>('');

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  };

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
    if (target === currentTarget) {
      closeModal();
    }
  };

  const onEscKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBodyScroll = (): void => {
    if (active) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onEscKeydown);
    } else {
      document.body.style.overflow = originalOverflow.current;
      window.removeEventListener('keydown', onEscKeydown);
    }
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  useEffect(() => {
    handleBodyScroll();

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
    };
  }, [active]);

  if (!active) return null;

  const textClassNames = `${styles.backdrop} ${className || ''} ${
    isVisible ? styles.active : ''
  }`;

  return createPortal(
    <div
      className={textClassNames}
      onClick={e => {
        onBackdropClick(e);
      }}
    >
      <div className={styles.modalBox} id="modal">
        {React.cloneElement(children as React.ReactElement, { closeModal })}
      </div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export default Modal;
