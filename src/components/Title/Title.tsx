import styles from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {children}
    </div>
  );
};

Title.displayName = "Title";

export default Title;
