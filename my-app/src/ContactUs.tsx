import React from 'react'
import emailjs from "emailjs-com"
import { Carousel } from 'react-responsive-carousel';

export default function Contact() {
    
    function sendEmail(e: any){
      
        e.preventDefault();

        emailjs.sendForm('outlook', 'template_pxj29ll',e.target, 'user_VkLFusuHiqd8TFGzuPLd5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return (
       <><div>
         <div className="input_background">
        <h1 className="site_title">Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" className="form-control input_space" aria-describedby="emailHelp" placeholder="name" required/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control input_space" placeholder="email" required/>
          </div>
          <div className="form-group">
            <input type="textarea" className="form-control input_space" placeholder="message" required/>
          </div>

          <button type="submit" className="btn btn-primary" id="space_top_button">Submit</button>
        </form>
       </div>
      </div>
      <Carousel >
          <div id="space_top">
            <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1620919867" alt="" />

          </div>
          <div>
            <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606762588" alt="" />

          </div>
          <div>
            <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607050018" alt="" />

          </div>
        </Carousel></>

    )
}
