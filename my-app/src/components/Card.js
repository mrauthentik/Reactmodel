import React from 'react'

export default function Card( {img,name,pricing,location,title,rating,review,openSpots}){
    let tip
    if(location != "Online"){
        tip = "SOLD OUT"
    }else{
        tip = "ONLINE"
    }
    return(
        <section className='card'>
            <div className='photo-grid'>
                <div className='card1'>
                    <div className='tip'>
                    {tip}
                    </div>
                    <img src={img} alt='' className='card-img'/> 
                     <div className='details'>
                         <span> ⭐⭐</span>
                         <span> {review }</span>
                         <span> {rating} . </span>
                         <span>{location} </span>
                     </div>
                     <p>{title} {name} </p>
                     <p> From ${pricing} / person </p>
                </div>
            </div>
          
            
        </section>
    )
}