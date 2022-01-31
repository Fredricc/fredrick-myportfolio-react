import React from "react";

export default function Project(){

return (
    <>
    <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Hotel Booking App{" "}
                </span>
                <span className="university-degree">MERN Stack React.js ,Node.js ,MongoDB{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2021 </span>
            </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Car Rental Application{" "}
                </span>
                <span className="university-degree">React.js ,Redux ,Node.js{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2021</span>
            </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one">
                <span className="university-name">Money Transaction Application{" "}
                </span>
                <span className="university-degree">Python{" "}
                </span>
            </div>{" "}
            <div>
                <span className="year-passedout">2021</span>
            </div>
        </div>
    </div>
    </>
);

}