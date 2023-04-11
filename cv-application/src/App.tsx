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

  const starterJob: any[] = [];

  starterJob.push({
    jobname: "Job Title",
    compname: "Company Name",
    start: "0000-11-22",
    end: "9999-01-02",
    desc: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    first: true,
  });

  const starterEdu: any[] = [];

  starterEdu.push({
    degname: "Degree Title",
    schoolname: "School Name",
    start: "0000-11-22",
    end: "9999-01-02",
    desc: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    first: true,
  });

  const [infoData, setInfoData] = useState(starterInfo);
  const [jobData, setJobData] = useState(starterJob);
  const [eduData, setEduData] = useState(starterEdu);

  const [firstEntry, setFirstEntry] = useState(true);

  const infoFormHandler = (event: any) => {
    event.preventDefault();

    if (firstEntry) {
      setInfoData({
        firstname: event.target[0].value,
        lastname: event.target[1].value,
        email: event.target[2].value,
        phone: event.target[3].value,
        linkedin: event.target[4].value,
        site: event.target[5].value,
      });
      setFirstEntry(false);
    } else {
      setInfoData({
        firstname:
          event.target[0].value === ""
            ? infoData.firstname
            : event.target[0].value,
        lastname:
          event.target[1].value === ""
            ? infoData.lastname
            : event.target[1].value,
        email:
          event.target[2].value === "" ? infoData.email : event.target[2].value,
        phone:
          event.target[3].value === "" ? infoData.phone : event.target[3].value,
        linkedin:
          event.target[4].value === ""
            ? infoData.linkedin
            : event.target[4].value,
        site:
          event.target[5].value === "" ? infoData.site : event.target[5].value,
      });
    }

    event.target.reset();
  };

  const jobFormHandler = (event: any) => {
    event.preventDefault();

    const entered = {
      jobname: event.target[0].value,
      compname: event.target[1].value,
      start: event.target[2].value,
      end: event.target[3].value,
      desc: event.target[4].value,
      first: false,
    };

    if (jobData[0].first === true) {
      setJobData([entered]);
    } else {
      setJobData(jobData.concat(entered));
    }
    event.target.reset();
  };

  const eduFormHandler = (event: any) => {
    event.preventDefault();

    const entered = {
      degname: event.target[0].value,
      schoolname: event.target[1].value,
      start: event.target[2].value,
      end: event.target[3].value,
      desc: event.target[4].value,
      first: false,
    };

    if (eduData[0].first === true) {
      setEduData([entered]);
    } else {
      setEduData(eduData.concat(entered));
    }
    event.target.reset();
  };

  return (
    <>
      <div className="build">Your Resume Builder</div>
      <div className="whole">
        <div className="left">
          <h1>Enter/Update Info:</h1>
          <h2>General Information</h2>
          <Info handleSub={infoFormHandler} first={firstEntry}></Info>
          <h2>Work Experience</h2>
          <Jobs handleSub={jobFormHandler}></Jobs>
          <h2>Academic Information</h2>
          <Education handleSub={eduFormHandler}></Education>
        </div>
        <div className="right">
          <h1>Resume:</h1>
          <Resume
            infoData={infoData}
            jobData={jobData}
            eduData={eduData}
          ></Resume>
        </div>
      </div>
    </>
  );
}

export default App;
