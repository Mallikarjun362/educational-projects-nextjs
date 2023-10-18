import styles from '../styles.module.css';
export default function PrimarySection() {
  return (
    <div style={{ width: '60%', padding: '10px 20px' }}>
      <h1 className={`${styles.h1}`}>Title of the main code</h1>
      <textarea name="code" id={`${styles.main_code}`}></textarea>
    </div>
  );
}
