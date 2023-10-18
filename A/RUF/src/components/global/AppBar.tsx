import { title_font, BrandLogo } from '@/utils/constants';

export default function AppBar() {
  return (
    <header>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '15px 30px',
          fontSize: '30px',
          userSelect: 'none',
          gap: '20px',
        }}
      >
        <BrandLogo />
        <h1 className={`${title_font.className}`}>
          Educational Resource Management Dashboard
        </h1>
      </div>
    </header>
  );
}
