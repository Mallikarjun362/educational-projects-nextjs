import SectionMain from '@/components/course_main_page/SectionMain';
import SectionMeta from '@/components/course_main_page/SectionMeta';
import SectionProfile from '@/components/course_main_page/SectionProfile';
import styles from '@/styles/course_main_page.module.css';

export default function CourseMainPage() {
  return (
    <div style={{ display: 'flex' }} className={`${styles['main-body']}`}>
      <div style={{ width: '20%' }}></div>
      <div
        style={{
          width: '60%',
          backgroundColor: '#EEE',
          padding: '0px',
          margin: '0px',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <SectionProfile />
        <SectionMeta />
        <SectionMain />
      </div>
      <div style={{ width: '20%' }}></div>
    </div>
  );
}
