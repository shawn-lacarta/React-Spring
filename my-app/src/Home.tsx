import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <><div className="App">
            <h1 className="home_title">Sole Store ZH</h1>
            <hr style={{ height: "20px", color: "white" }} />
        </div>
        
        <Carousel>
                <div>
                    <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1620919867" alt=""/>
                    
                </div>
                <div>
                    <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606762588" alt=""/>
                    
                </div>
                <div>
                    <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607050018" alt=""/>
                    
                </div>
            </Carousel>
        
    
        </>  

    )
}

export default Home;
