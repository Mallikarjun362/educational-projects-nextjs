import Layout from '@/components/erm/Layout';
import PrimaryComponent from '@/components/erm/view_simple/PrimaryComponent';
export default function index() {
  return (
    <Layout>
      <div style={{ padding: '10px 30% 10px 10%' }}>
        <PrimaryComponent />
      </div>
    </Layout>
  );
}
