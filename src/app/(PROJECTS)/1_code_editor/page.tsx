// IMPORTING STYLES
import styles from './styles.module.css';
// IMPORT SECTIONS
import PrimarySection from './_sections/Primary.section';
import SecondarySection from './_sections/Secondary.section';
// MAIN PAGE EXPORT
export default function CodeEditorMainPage() {
  return (
    <main className={`${styles.body}`}>
      <PrimarySection />
      <SecondarySection />
    </main>
  );
}
