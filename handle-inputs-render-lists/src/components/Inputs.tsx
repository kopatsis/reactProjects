interface Props {
  handleSub: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Inputs = ({ handleSub }: Props) => {
  return (
    <form onSubmit={handleSub}>
      <label htmlFor="item">Entry:</label>
      <input id="item" type="text" name="item"></input>
      <input type="submit" />
    </form>
  );
};

export default Inputs;
