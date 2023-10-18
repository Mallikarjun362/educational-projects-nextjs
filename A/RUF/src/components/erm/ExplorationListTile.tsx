import { useRouter } from 'next/router';

interface IExplorationListTile {
  title: string;
  id: any;
}
export default function ExplorationListTile({
  title,
  id,
}: IExplorationListTile) {
  const router = useRouter();
  return (
    <div
      className="hover:bg-[#00000027] bg-[#0001] duration-100"
      style={{
        padding: '10px',
        borderRadius: '10px',
        fontSize: '20px',
        cursor: 'pointer',
      }}
      onClick={(e) => router.push(`/_erm_/view_standard/${id}`)}
    >
      {title}
    </div>
  );
}
