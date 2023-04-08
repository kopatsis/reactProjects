import Overview from "./components/Overview";
import Inputs from "./components/Inputs";

const reeList = ["ree", "reeeeee", "reeeeeeee", "REEEEEEE", "REE"];

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(event.target[0].value);
  event.target[0].value = "";
};

const App = () => {
  return (
    <>
      <Overview entries={reeList} />
      <Inputs handleSub={handleSubmit} />
    </>
  );
};

export default App;
