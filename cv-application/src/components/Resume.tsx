import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="Inform">
        <h2>LastName, FirstName</h2>
        <div className="phonemail oneline">
          <div>email@email.com</div>
          <div>111-222-3333</div>
        </div>
        <div className="optionals oneline">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="Work">
        <h3>Work Experience</h3>
        <div className="work-unit">
          <div className="title-company oneline">
            <div>Job Title</div>
            <div>Company Name</div>
          </div>
          <div className="jdates oneline">
            <div>Start Date: 00/00/0000</div>
            <div>End Date: 99/99/9999</div>
          </div>
          <div>Description of Duties: </div>
          <p>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah. Blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah. Blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah.
          </p>
        </div>
      </div>
      <div className="Edu">
        <h3>Academic Information</h3>
        <div className="edu-unit">
          <div className="title-school oneline">
            <div>Degree Title</div>
            <div>School Name</div>
          </div>
          <div className="edates oneline">
            <div>Start Date: 00/00/0000</div>
            <div>End Date: 99/99/9999</div>
          </div>
          <div>Description of Degree: </div>
          <p>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah. Blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah. Blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
