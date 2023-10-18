import Layout from '@/components/erm/Layout';
import ExplorationProfile from '@/components/erm/ExplorationProfile';

export default function Page() {
  return (
    <Layout>
      <div style={{ padding: '10px 30% 10px 10%' }}>
        <ExplorationProfile />
      </div>
    </Layout>
  );
}
