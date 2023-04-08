interface Props {
  entries: string[];
}

const Overview = ({ entries }: Props) => {
  return (
    <ul>
      {entries.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Overview;
