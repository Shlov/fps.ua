import styles from './Section.module.scss';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${styles.sectionContainer} ${className || ''}`}>
      {children}
    </section>
  );
};

Section.displayName = "Section";

export default Section;
