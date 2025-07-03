import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>; // todos os tipos disponíveis de input serem utilizados

export const DefaultInput = ({
  id,
  labelText,
  type,
  ...props
}: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
};
