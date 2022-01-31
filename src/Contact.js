import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export default function Contact(){
    
    const form = useRef(); 
    const sendEmail = (e) => {
          e.preventDefault();
    
        emailjs.sendForm('service_vk8xju4', 'template_ngh6xd1', form.current, 'user_gWRhhmPjPXo6PF0bhXQwh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

return(
        <>
        <div>
            <div className="contact-me-card row">
                <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                    <span className="get-in-touch mx-4 my-5"> Get in touch</span>
                    <div className="d-flex justify-content-center">
                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_2iszWM.json"  background="transparent"  speed="1"  style={{width: "300px", height: "200px"}}  loop autoplay></lottie-player>   
                    </div>
                    <div className="d-flex justify-content-center">
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_0em5ernk.json"  background="transparent"  speed="0.5"  style={{width: "300px", height: "200px"}}  loop autoplay></lottie-player>   
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12 my-auto" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <form  
                    ref={form}
                    onSubmit={sendEmail} 
                    className="d-flex flex-column card-contact-right">
                        <div className="input-group my-3 d-flex flex-column">
                            <label> Name </label>
                            <input 
                            name="from_name"     
                            type="text" placeholder="Enter your name" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label> Email </label>
                            <input
                            name="email"
                            type="text" placeholder="Enter your Email" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label> Message </label>
                            <textarea 
                            name="feedback"
                            type="text" 
                            placeholder="Enter your message" className="input-groups"
                            />
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <input 
                            className="btn btn-success" 
                            type="submit"
                            value="Send Message"
                            />{" "}
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}