import React from "react";
import './testimonial.css';
export default function Testimonials() {
const testimonials = [
    {
        name: "Wycliffe",
        text:
        "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed great skilled guy."
    },
    {
        name: "Richu Mimi",
        text:
        "Fredrick's project was the most efficient and user friendly. Therefore we gladly decided to use the project for our business"
    },
    {
        name: "Kenneth",
        text:
        "The project developed by Fredrick had all the features that we requested plus some other useful additional features that deployed as a bonus. As a result the project delivered was better than we expected"
    }
];
    return <>
        <div>
            <div className="row mx-5">
                {testimonials.map((value) =>{
                    return (
                    <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                        <div className="card shadow testimonial-card d-flex flex-column">
                            <span className="description">{value.text}</span>
                            <span className="stars">🌟🌟🌟🌟🌟</span>
                            <span className="name">{value.name}</span>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </>;
}