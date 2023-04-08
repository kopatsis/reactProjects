interface Props {
  entries: string[];
  onDelClick: (index: number) => void;
}

const Overview = ({ entries, onDelClick }: Props) => {
  return (
    <>
      {entries.length >= 0 && (
        <ul>
          {entries.map((item, index) => (
            <li key={index}>
              {`${index + 1}: ${item}`}
              <br></br>
              <button onClick={() => onDelClick(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Overview;
