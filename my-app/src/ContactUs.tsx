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
        <h1 className="site_title">Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="name" />
          </div>
          <div className="form-group">
            <label>email</label>
            <input type="email" className="form-control" placeholder="email" />
          </div>
          <div className="form-group">
            <label>text</label>
            <input type="textarea" className="form-control" placeholder="message" />
          </div>

          <button type="submit" className="btn btn-primary" id="space_top_button">Submit</button>
        </form>
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
