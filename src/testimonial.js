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
        "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed great skilled guy."
    },
    {
        name: "Kenneth",
        text:
        "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed great skilled guy."
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