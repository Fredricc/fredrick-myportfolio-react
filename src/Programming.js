import React from "react";
import "./programming.css";
export default function Programming(){
const value = [
    {
        text:"Javascript",
        percentage: 80
    },
    {
        text:"React.js",
        percentage: 80
    },
    {
        text:"Node.js",
        percentage: 80
    },
    {
        text:"Django",
        percentage: 80
    },
    {
        text:"Data Science",
        percentage: 80
    },
    {
        text:"Python",
        percentage: 80
    },
];
return<>
    <div className="row">
        {value.map((value, index)=>{
            return <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                    <span className="language">{value.text}</span>
                    <div className="progress-some">
                        <div className="progress-new" style={{ width: `${value.percentage}%` }}>
                            {"  "}
                        </div>
                    </div>
                </div>

            </>
        })}
    </div>

</>;

}