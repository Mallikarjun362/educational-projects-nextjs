import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ padding: '30px', fontSize: '30px' }}>
      <a
        href="./2_universal_knowledge_base"
        className="text-blue-400 hover:text-blue-800"
      >
        Universal Knowledge base
      </a>
      <br />
    </main>
  );
}
