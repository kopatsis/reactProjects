interface Props {
  handleSub: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Jobs = ({ handleSub }: Props) => {
  return (
    <form onSubmit={handleSub}>
      <input id="title" placeholder="Job Title" type="text" required />
      <input id="company" placeholder="Company Name" type="text" required />
      <div className="date-range">
        <input
          className="dates"
          id="start-job"
          placeholder="Start"
          type="date"
          required
        />
        <input
          className="dates"
          id="end-job"
          placeholder="End"
          type="date"
          required
        />
      </div>
      <textarea rows={4} id="desc" placeholder="Role Description"></textarea>
      <input id="sub" type="submit" value="Add New" />
    </form>
  );
};

export default Jobs;
