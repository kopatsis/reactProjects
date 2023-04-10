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
          <div key={index} className="work-unit">
            <div className="title-company oneline">
              <div>{item.jobname}</div>
              <div>{item.compname}</div>
            </div>
            <div className="jdates oneline">
              <div>
                Start Date:{" "}
                {item.start.slice(5, 7) +
                  "/" +
                  item.start.slice(8, 10) +
                  "/" +
                  item.start.slice(0, 4)}
              </div>
              <div>
                End Date:{" "}
                {item.end.slice(5, 7) +
                  "/" +
                  item.end.slice(8, 10) +
                  "/" +
                  item.end.slice(0, 4)}
              </div>
            </div>
            <div>Description of Duties: </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="Edu">
        <h3>Academic Information</h3>
        {eduData.map((item, index) => (
          <div key={index} className="edu-unit">
            <div className="title-school oneline">
              <div>{item.degname}</div>
              <div>{item.schoolname}</div>
            </div>
            <div className="edates oneline">
              <div>
                Start Date:{" "}
                {item.start.slice(5, 7) +
                  "/" +
                  item.start.slice(8, 10) +
                  "/" +
                  item.start.slice(0, 4)}
              </div>
              <div>
                End Date:{" "}
                {item.end.slice(5, 7) +
                  "/" +
                  item.end.slice(8, 10) +
                  "/" +
                  item.end.slice(0, 4)}
              </div>
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
