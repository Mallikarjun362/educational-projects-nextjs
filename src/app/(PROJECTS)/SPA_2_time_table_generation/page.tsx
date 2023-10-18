// IMPORTING CSS STYLES
import styles from './styles.module.css';
// IMPORTING COMPONENTS
import AppBar from './_components/AppBar';
export default function TimeTablePage() {
  return (
    <div className={`${styles.page}`}>
      <AppBar />
      <main></main>
    </div>
  );
}
