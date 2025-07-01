import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode; //tudo que o react aceita como children
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
