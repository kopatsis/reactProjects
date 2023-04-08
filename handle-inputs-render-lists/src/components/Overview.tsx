interface Props {
  entries: string[];
}

const Overview = ({ entries }: Props) => {
  return (
    <>
      {entries.length >= 0 && (
        <ul>
          {entries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Overview;
