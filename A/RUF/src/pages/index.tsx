import Link from 'next/link';
export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <h1>Home Page</h1>
      <Link href={'/_erm_'} className="link">
        Educational Resource Management
      </Link>
    </div>
  );
}
