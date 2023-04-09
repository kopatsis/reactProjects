import Education from "./components/Education";
import Info from "./components/Info";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="whole">
      <div>
        <h1>Enter/Update Info:</h1>
        <h2>General Information</h2>
        <Info></Info>
        <h2>Work Experience</h2>
        <Jobs></Jobs>
        <h2>Academic Information</h2>
        <Education></Education>
      </div>
      <div>
        <h1>Resume:</h1>
      </div>
    </div>
  );
}

export default App;
