const highImportance = [
  'Boolean model',
  'Vector space model',
  'Inverted index',
  'Term weighting',
  'Cosine similarity',
  'Precision',
  'Recall',
  'F1-score',
  'Query understanding',
  'Relevance feedback',
  'PageRank',
  'Term frequency (TF)',
  'Inverse document frequency (IDF)',
  'Snippet generation',
  'Query expansion',
  'Crawling',
  'Click-through rate (CTR)',
  'Evaluation metrics',
  'BM25 ranking algorithm',
  'Okapi ranking algorithm',
  'Language models',
  'Natural language processing (NLP)',
  'Entity recognition',
  'Document clustering',
  'Latent semantic indexing (LSI)',
  'Named Entity Recognition (NER)',
  'Information extraction',
  'Web search engines',
  'Information retrieval systems',
  'Document retrieval',
  'Document ranking',
  'Information retrieval evaluation',
  'Query processing',
  'Indexing techniques',
  'Query optimization',
  'Search engine architecture',
  'Text mining',
  'Query log analysis',
];

const mediumImportance = [
  'Cross-lingual retrieval',
  'Machine learning in IR',
  'Document classification',
  'Passage retrieval',
  'Query intent recognition',
  'Personalized search',
  'Duplicate detection',
  'User feedback analysis',
  'Link analysis algorithms',
  'Anchor text analysis',
  'Query log mining',
  'Passage ranking',
  'Collaborative filtering',
  'Contextual search',
  'Expert search',
  'Sentiment analysis in IR',
  'User interface design',
  'Multimedia retrieval',
  'Index compression',
  'Vertical search',
  'Click models',
  'Domain-specific search',
  'Query reformulation',
  'User profiling',
  'Query auto-completion',
  'Opinion mining',
  'Query classification',
  'Cross-domain retrieval',
  'Ontology-based retrieval',
  'Tag-based retrieval',
  'Query suggestion',
  'Learning to rank',
  'Session-based search',
  'Intent-based search',
  'Recommendation systems',
  'Spam detection in search',
  'Temporal information retrieval',
  'Query performance prediction',
];

const lowerImportance = [
  'Query translation',
  'User satisfaction measurement',
  'Information visualization',
  'User behavior modeling',
  'Query log privacy',
  'Click-through prediction',
  'Trust-aware retrieval',
  'Entity linking',
  'Probabilistic retrieval models',
  'Opinion mining',
  'Topic modeling',
  'Social media retrieval',
  'Context-aware retrieval',
  'Geographic information retrieval',
  'User privacy in IR',
  'Multimodal retrieval',
  'Query segmentation',
];
function Chip({ bgColor = '#ddd', text }: { bgColor: string; text: string }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderRadius: '50px',
        padding: '5px 15px',
      }}
    >
      {text}
    </div>
  );
}

export default function SectionMainTopics() {
  return (
    <div
      style={{
        // backgroundColor: '#F0EDD4',
        backgroundColor: '#D6E6E844',
        padding: '20px 30px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '0px',
          backgroundColor: '#fff6',
          padding: '3px 5px',
          color: 'red',
          borderBottomLeftRadius: '10px',
          userSelect: 'none',
          fontFamily: 'monospace',
          fontSize: '15px',
        }}
      >
        (main)
      </div>
      <br />
      <div
        className="red"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {highImportance
          .sort((a, b) => a.length - b.length)
          .map((ele) => (
            <Chip text={ele} bgColor={'#F79696aa'} />
          ))}
      </div>
      <br />
      <br />
      <div
        className="orange"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {mediumImportance
          .sort((a, b) => a.length - b.length)
          .map((ele) => (
            <Chip text={ele} bgColor={'#F7D0AF'} />
          ))}
      </div>
      <br />
      <br />
      <div
        className="gray"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {lowerImportance
          .sort((a, b) => a.length - b.length)
          .map((ele) => (
            <Chip text={ele} bgColor={'#ddd'} />
          ))}
      </div>
    </div>
  );
}
