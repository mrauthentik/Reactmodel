import React from "react";

export default function Footer(){
    return(
        <section className="extend">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="10" d="M0,224L48,240C96,256,192,288,288,266.7C384,245,480,171,576,133.3C672,96,768,96,864,85.3C960,75,1056,53,1152,37.3C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
            <div className="footer"> 
                <img src="/images/airbnblogo.jpg" className="footere-img" alt=""/>
            </div>
            <div className="footer-text">
                <p> Thanks for Choosing AIRBNB</p>
                <footer> Your Online Activites our Concern</footer>
            <em> Thank you for choosing Airbnb, your activites online our concern</em>
            <p> Address: Nashville USA</p>
            </div>
        </section>
        
    )
}