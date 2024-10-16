import styles from "./Title.module.css";

export const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
