import Container from '../Container/Container';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Typography from '../Typography/Typography';

import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div id="Contacts">
      <Section className={styles.section}>
          <Container>
        <Title>
          <Typography
            variant="subheading1"
            className={styles.title}
            color="var(--cl-white)"
          >
            Контакти
          </Typography>
        </Title>
          
        </Container>
      </Section>
    </div>
  );
};

export default Contacts;
