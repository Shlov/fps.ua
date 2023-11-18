
import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <Section>
      <Title>
        <Typography variant="subheading1" className={styles.title} color="var(--cl-white)">
          Галерея
        </Typography>
      </Title>
      <Container>
      </Container>
    </Section>
  );
};

export default Gallery;
