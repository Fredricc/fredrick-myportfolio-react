import React from "react";
import "./education.css";
export default function Education() {

return (
    <>
    <div className="d-flex flex-column">
        <div className="education-one my-3 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Moolya Ed and Techno Brain Ltd{" "}
                </span>
                <span className="university-degree">C#, Power Automate, .Net Playwright End to End Test Automation, Jenkins CI/CD and GIT certification <a href="https://moolyaed.certificate.givemycertificate.com/c/95c78b52-26cd-47c1-b4c1-6f906e402c38"> 95c78b52-26cd-47c1-b4c1-6f906e402c38</a>{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2023</span>
            </div>
        </div>
        <div className="education-one my-3 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Kenya Methodist University{" "}
                </span>
                <span className="university-degree">Bachelors of Science in Computer Information Systems{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2010-2012</span>
            </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Kenya School of Professional Studies{" "}
                </span>
                <span className="university-degree">Diploma in Computer Engineering{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2008-2010</span>
            </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Pumwani Boys Secondary School{" "}
                </span>
                <span className="university-degree">High school{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2002-2005</span>
            </div>
        </div>
    </div>
    </>
);

}
