import { list_explorations as le } from '@/data/erm';
import { primary_element_content_background_color } from '@/utils/constants';
import ExplorationListTile from './ExplorationListTile';

function ListSection({ char, list }: { char: string; list: Array<any> }) {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
      <div
        style={{
          width: '35px',
          padding: '10px 15px',
          color: '#0007',
        }}
      >
        {char}
      </div>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {list.map((ele) => (
          <ExplorationListTile title={ele.title} id={ele.unique_ID} />
        ))}
      </div>
    </div>
  );
}

interface IDictExplorations {
  [key: string]: Array<any>;
}

export default function ExplorationsList({
  list_explorations = le,
  ...props
}: any) {
  const dict_explorations: IDictExplorations = {};
  for (let index = 0; index < list_explorations.length; index++) {
    const element = list_explorations[index];
    const alpha = element.title[0];
    if (alpha in dict_explorations) {
      dict_explorations[alpha as keyof IDictExplorations].push(element);
    } else {
      dict_explorations[alpha as keyof IDictExplorations] = [element];
    }
  }
  return (
    <div
      style={{
        backgroundColor: primary_element_content_background_color,
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {Object.entries(dict_explorations).map(([k, v], idx) => (
        <ListSection char={k} list={v} key={idx} />
      ))}
    </div>
  );
}
