import { title_font, BrandLogo } from '@/utils/constants';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

const HomeButton = () => {
  return (
    <Link
      href={'/'}
      style={{
        backgroundColor: '#0002',
        padding: '10px',
        borderRadius: '100%',
        position: 'absolute',
        right: '50px',
      }}
    >
      <AiOutlineHome />
    </Link>
  );
};

export default function AppBar() {
  return (
    <header>
      <div
        className={`${title_font.className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          backgroundColor: '#ddd',
          padding: '15px 30px',
          userSelect: 'none',
          fontSize: '30px',
          gap: '20px',
          position: 'relative',
        }}
      >
        <BrandLogo />
        <Link href="/_erm_">Educational Resource Management</Link>
        <span style={{ color: 'gray' }}>(Dashboard)</span>
        <HomeButton />
      </div>
    </header>
  );
}
