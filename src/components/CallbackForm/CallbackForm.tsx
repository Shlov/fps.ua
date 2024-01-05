import { useForm } from 'react-hook-form';
import { HiOutlineX } from 'react-icons/hi';
import Typography from '@components/Typography/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import styles from './CallbackForm.module.scss';

interface CallbackFormProps {
  title: string;
  onCloseModal: () => void;
}

const CallbackForm: React.FC<CallbackFormProps> = ({ title, onCloseModal }) => {
  const phoneRegex = /^(\d[-\s]{0,3}){9}\d$/;
  const lettersRegex = /^(?=.{2,16}$)[a-zA-Zа-яА-ЯіїІЇ]+(?:[-\s][a-zA-Zа-яА-ЯіїІЇ]+)*$/;
  const schema = object({
    name: string()
      .trim()
      .required("Вкажіть ім'я")
      .matches(lettersRegex, 'Не валідне значення імені'),
    number: string()
      .trim()
      .required('Номер телефону обовязковий')
      .matches(phoneRegex, 'Не валідне значення номеру'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    console.log('sub');
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{title}</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <p className={styles.title}>Ім&apos;я</p>
          <input
            className={styles.input}
            {...register('name')}
            placeholder="Олег"
          />
          <p className={styles.error}>{errors.name?.message}</p>
        </label>
        <label className={styles.label}>
          <p className={styles.title}>Номер телефону</p>
          <input
            className={styles.input}
            {...register('number', { required: true })}
            placeholder="063 221 26 26"
          />
          <p className={styles.error}>{errors.number?.message}</p>
        </label>

        <button className={styles.btn} type="submit">
          <Typography variant="subheadingN">Надіслати</Typography>
        </button>
        {/* <Button variant="primary" className={styles.btn} type='submit'>Надіслати</Button> */}
      </form>
      <button className={styles.close} aria-label='Зкарити форму' onClick={onCloseModal}>
        <HiOutlineX />
      </button>
    </div>
  );
};

export default CallbackForm;
