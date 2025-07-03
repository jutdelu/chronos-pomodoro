import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>; // todos os tipos disponíveis de button serem utilizados

export const DefaultButton = ({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
};
