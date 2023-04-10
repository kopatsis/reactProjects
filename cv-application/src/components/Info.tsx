interface Props {
  handleSub: (event: React.FormEvent<HTMLFormElement>) => void;
  first: boolean;
}

const Info = ({ handleSub, first }: Props) => {
  return (
    <form onSubmit={handleSub}>
      <input
        id="firstname"
        placeholder="First Name"
        type="text"
        required={first}
      />
      <input
        id="lastname"
        placeholder="Last Name"
        type="text"
        required={first}
      />
      <input id="email" type="email" placeholder="Email" required={first} />
      <input
        id="phone"
        type="tel"
        placeholder="Phone Number"
        required={first}
      />
      <input id="linkedin" type="text" placeholder="LinkedIn (Optional)" />
      <input id="site" type="text" placeholder="Website (Optional)" />
      <input id="sub" type="submit" value={first ? "Add" : "Update Any"} />
    </form>
  );
};

export default Info;
