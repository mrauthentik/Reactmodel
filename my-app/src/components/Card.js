import React from 'react'

export default function Card( {img,name,pricing,country}){
    return(
        <section>
            <div className='photo-grid'>
                <div className='card1'>
                    <img src={img} alt='' className='card-img'/> 
                     <div className='details'>
                         <span> ⭐⭐</span>
                         <span> 5.6</span>
                         <span> (6) . </span>
                         <span>{country} </span>
                     </div>
                     <p>Life Lessons with {name} </p>
                     <p> From {pricing} / person </p>
                </div>
                {/* <div className='card2'> 
                    <img src='/images/photo (2).jpg' alt='' className='card-img'/>
                    <div className='details'>
                    <span> ⭐⭐⭐</span>
                         <span> 7.1</span>
                         <span> (7) . </span>
                         <span>Dominican  </span>
                    </div> 
                    <p>Life Lessons with Shina Gonzalez </p>
                     <p> From $126/ person </p>
                </div>
                <div className='card3'>
                    <img src='/images/photo (3).jpg' alt='' className='card-img'/>
                    <div className='details'>
                    <span> ⭐⭐⭐⭐</span>
                         <span> 8.9</span>
                         <span> (8) . </span>
                         <span>Nigeria  </span>
                    </div>
                    <p>Life Lessons with Uche John </p>
                     <p> From $156/ person </p>
                </div> */}
            </div>
          
            
        </section>
    )
}