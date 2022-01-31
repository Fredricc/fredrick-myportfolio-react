import React from "react";
import "./education.css";
export default function Education() {

return (
    <>
    <div className="d-flex flex-column">
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
                <span className="university-name">Kenya School of Professional Studies{" "}
                </span>
                <span className="university-degree">Pumwani Boys Secondary School{" "}
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