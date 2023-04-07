interface Props {
  entries: string[];
}

const Overview = ({ entries }: Props) => {
  return (
    <ul>
      {entries.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Overview;
