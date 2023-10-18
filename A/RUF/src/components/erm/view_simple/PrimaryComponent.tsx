import { useState } from 'react';
import CreateExploration from './CreateExploration.Form';
import ViewList from './ViewList.Display';

interface EducationalResource {
  url: string;
  title?: string;
  link?: {
    base_url: string;
    extension: string;
  };
}
interface ILocalData {
  // list_of_educational_resources: Array<EducationalResource>;
  list_of_educational_resources: Array<string>;
}
const localData: ILocalData = {
  list_of_educational_resources: ['https://www.tensorflow.org/'],
};

export default function PrimaryComponent() {
  const [list, setList] = useState<string[]>([]);
  const addItem = (item: any) => {
    if (item !== '') {
      setList((preList) => [...preList, item]);
    }
  };
  return (
    <div
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <CreateExploration addItem={addItem} />
      <ViewList list_of_educational_resources={list} />
    </div>
  );
}
