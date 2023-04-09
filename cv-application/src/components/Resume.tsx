import React from "react";

interface Props {
  infoData: any;
  jobData: any[];
  eduData: any[];
}

const Resume = ({ infoData, jobData, eduData }: Props) => {
  return (
    <div className="resume">
      <div className="Inform">
        <h2>
          {infoData.lastname}, {infoData.firstname}
        </h2>
        <div className="phonemail oneline">
          <div>{infoData.email}</div>
          <div>{infoData.phone}</div>
        </div>
        <div className="optionals oneline">
          <div>{infoData.linkedin.length >= 0 && infoData.linkedin}</div>
          <div>{infoData.site.length >= 0 && infoData.site}</div>
        </div>
      </div>
      <div className="Work">
        <h3>Work Experience</h3>
        {jobData.map((item, index) => (
          <div className="work-unit">
            <div className="title-company oneline">
              <div>{item.jobname}</div>
              <div>{item.compname}</div>
            </div>
            <div className="jdates oneline">
              <div>Start Date: {item.start}</div>
              <div>End Date: {item.end}</div>
            </div>
            <div>Description of Duties: </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="Edu">
        <h3>Academic Information</h3>
        {eduData.map((item, index) => (
          <div className="edu-unit">
            <div className="title-school oneline">
              <div>{item.degname}</div>
              <div>{item.schoolname}</div>
            </div>
            <div className="edates oneline">
              <div>Start Date: {item.start}</div>
              <div>End Date: {item.end}</div>
            </div>
            <div>Description of Degree: </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
