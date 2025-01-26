import React from "react";
import "./experience.css";
import mercedes from "../../assets/mercedes_logo.png";

const ExperienceSection = () => {
  const ExperienceData = [
    {
      name: "Merced's Benz Research and Development",
      role: "Data Annotation",
      start: "jan 2024",
      end: "mar 2024",
      imgSrc: mercedes,
      shortDescriptions: [
        "Data annotation for various machine learning projects, ensuring high-quality labeled data for model training.",
        "collaborated with data scientists and engineers to understand annotation requirements and guidelines",
        "I also reviewed and validated annotated data to ensure consistency and accuracy, contributing to the overall quality of the dataset.",
      ],
    }
  ];

  return (
    <section className="section" id="experience">
      <h2 className="section__title">Where I&apos;ve worked</h2>
      <span className="section__subtitle">My Experience</span>
      <div className="timeline">
        {ExperienceData.map((exper, index) => (
          <div
            className={`container1 ${
              index % 2 === 0 ? "left-container" : "right-container"
            }`}
            key={index}
          >
            <img src={exper.imgSrc} alt={`${exper.name} logo`} />
            <div className="text-box">
              <h2>
                {exper.role}, {exper.name}
              </h2>
              <small>
                {exper.start} - {exper.end}
              </small>
              <ol style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {exper.shortDescriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
              <span
                className={`${
                  index % 2 === 0
                    ? "left-container-arrow"
                    : "right-container-arrow"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
