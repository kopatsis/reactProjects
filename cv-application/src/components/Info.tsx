interface Props {
  handleSub: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Info = ({ handleSub }: Props) => {
  return (
    <form onSubmit={handleSub}>
      <input id="firstname" placeholder="First Name" type="text" required />
      <input id="lastname" placeholder="Last Name" type="text" required />
      <input id="email" type="email" placeholder="Email" required />
      <input id="phone" type="tel" placeholder="Phone Number" required />
      <input id="linkedin" type="text" placeholder="LinkedIn (Optional)" />
      <input id="site" type="text" placeholder="Website (Optional)" />
      <input id="sub" type="submit" value="Add" />
    </form>
  );
};

export default Info;
