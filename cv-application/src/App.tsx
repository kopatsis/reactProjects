import { useState } from "react";
import Education from "./components/Education";
import Info from "./components/Info";
import Jobs from "./components/Jobs";
import Resume from "./components/Resume";

function App() {
  const starterInfo = {
    firstname: "FirstName",
    lastname: "LastName",
    email: "email@email.com",
    phone: "111-222-3333",
    linkedin: "",
    site: "",
  };

  const starterJob = [
    {
      jobname: "Job Title",
      compname: "Company Name",
      start: "00/00/000",
      end: "99/99/9999",
      desc: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
  ];

  const starterEdu = [
    {
      degname: "Degree Title",
      schoolname: "School Name",
      start: "00/00/000",
      end: "99/99/9999",
      desc: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    },
  ];

  const [infoData, setInfoData] = useState(starterInfo);
  const [jobData, setJobData] = useState(starterJob);
  const [eduData, setEduData] = useState(starterEdu);

  return (
    <div className="whole">
      <div className="left">
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
        <Resume
          infoData={infoData}
          jobData={jobData}
          eduData={eduData}
        ></Resume>
      </div>
    </div>
  );
}

export default App;
