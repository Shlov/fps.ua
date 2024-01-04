import { useForm } from 'react-hook-form';
import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import styles from './CallbackForm.module.scss';

interface CallbackFormProps {
  title: string;
}

const CallbackForm: React.FC<CallbackFormProps> = ({ title }) => {
  const phoneRegex = /^(\d{3}[-\s]?)(\d{3}[-\s]?)(\d{2}[-\s]?){2}$/;

  const schema = object({
    name: string(),
    number: string()
      .trim()
      .required('Номер телефону обовязковий до заповнення')
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
      <Typography variant="subheadingN">{title}</Typography>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <p className={styles.title}>Ім'я</p>
          <input
            className={styles.input}
            {...register('name')}
            placeholder="Олег"
          />
          {/* <p className={styles.error}>{errors.name?.message}</p> */}
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
    </div>
  );
};

export default CallbackForm;
