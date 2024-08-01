import React from "react";
import "./programming.css";
export default function Programming(){
const value = [
    {
        text:"C#",
        percentage: 80
    },
    {
        text:"ASP.NET MVC",
        percentage: 80
    },
    {
        text:"ASP.NET Razor",
        percentage: 80
    },
    {
        text:"Javascript",
        percentage: 80
    },
    {
        text:"Data Science",
        percentage: 80
    },
    {
        text:"ASP.NET Blazor",
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
