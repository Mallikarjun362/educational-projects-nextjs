import ListItem from './ListItem.Element';

export default function ViewList({
  list_of_educational_resources,
}: {
  list_of_educational_resources?: Array<string>;
}) {
  return (
    <div
      style={{
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2E9E9',
      }}
    >
      {list_of_educational_resources?.map((ele) => (
        <ListItem text={ele} />
      ))}
    </div>
  );
}
