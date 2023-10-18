import styles from './styles.module.css';
import PrimarySection from './_sections/PrimarySection';
import SecondarySection from './_sections/SecondarySection';

export default function TimeManagementPage() {
  return (
    <div className={`${styles.body}`}>
      <PrimarySection />
      <SecondarySection />
    </div>
  );
}
