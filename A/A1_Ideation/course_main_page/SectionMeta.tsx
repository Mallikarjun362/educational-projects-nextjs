interface ISectionMeta {
  title?: String;
  description?: String;
}

const default_args: ISectionMeta = {
  title: 'Title of the course',
  description: 'lorem',
};

export default function SectionMeta(props: ISectionMeta) {
  props = {
    ...default_args,
    ...props,
  };
  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#FFFDAF' }}>
      Meta Section
    </div>
  );
}
