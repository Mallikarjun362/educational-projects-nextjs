import { primary_element_content_background_color } from '@/utils/constants';

interface ActivitySession {
  start: Date;
  end: Date;
  content: Array<string>;
  // task: null | string;
}
interface ILocalData {
  title?: string;
  description?: string;
  num_of_hours?: number;
  timeline_activity?: Array<ActivitySession>;
  related_fields?: Array<string>;
}
const localData: ILocalData = {
  title: 'Information Retrieval',
  description:
    'Information retrieval (IR) is the process of searching for and retrieving relevant information from a collection of unstructured or semi-structured data. It involves techniques and algorithms that enable users to find and access desired information efficiently. IR systems typically employ methods such as indexing, ranking, and query processing to match user queries with relevant documents or resources. The goal of information retrieval is to provide users with accurate and meaningful results based on their information needs, often applied in search engines, document retrieval, and recommendation systems',
  num_of_hours: 24,
  timeline_activity: [],
  related_fields: [
    'Deep Learning',
    'Computer Science',
    'Machine Learning',
    'Information Technology',
    'Artificial Intelligence',
    'Natural Language Processing',
  ],
};

export default function SectionControlRoom() {
  return (
    <div
      style={{
        backgroundColor: primary_element_content_background_color,
        padding: '10px 50px',
      }}
    >
      {/* Hor Div 1 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <div
          style={{
            paddingTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <h1 style={{ fontSize: '50px' }}>{localData.title}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {localData.related_fields?.map((ele, idx) => (
              <div className="rel-chip" key={idx}>
                {ele}
              </div>
            ))}
          </div>
        </div>
        <img
          src="/assets/information_retrieval_1.png"
          alt="Hello"
          style={{ height: '250px' }}
        />
      </div>
      <br />
      {/* Hor Div 2 */}
      <p style={{ color: '#0005' }} className="desc">
        {localData.description}
      </p>
    </div>
  );
}
