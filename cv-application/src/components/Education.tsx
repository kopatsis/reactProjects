interface Props {
  handleSub: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Education = ({ handleSub }: Props) => {
  return (
    <form onSubmit={handleSub}>
      <input id="degree" placeholder="Degree" type="text" required />
      <input id="school" placeholder="School Name" type="text" required />
      <div className="date-range">
        <input id="start-school" placeholder="Start" type="date" required />
        <input id="end-school" placeholder="End" type="date" required />
      </div>
      <textarea rows={4} id="desc" placeholder="Degree Description"></textarea>
      <input id="sub" type="submit" value="Add New" />
    </form>
  );
};

export default Education;
