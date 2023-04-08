import Overview from "./components/Overview";
import Inputs from "./components/Inputs";
import { useState } from "react";

const reeList: string[] = [];

const App = () => {
  const [entryList, setEntryList] = useState(reeList);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entered = event.target.item.value;
    setEntryList((arr) => [...arr, entered]);

    event.target.item.value = "";
  };

  return (
    <>
      <Overview entries={entryList} />
      <Inputs handleSub={handleSubmit} />
    </>
  );
};

export default App;
