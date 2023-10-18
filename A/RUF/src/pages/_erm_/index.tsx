import Layout from '@/components/erm/Layout';
import ExplorationsList from '@/components/erm/ExplorationsList';
export default function ShortPage() {
  return (
    <Layout>
      <div className="page-erm" style={{ padding: '10px 30% 10px 10%' }}>
        <ExplorationsList />
      </div>
    </Layout>
  );
}
