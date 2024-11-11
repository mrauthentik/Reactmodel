import React from 'react'

export default function Card( props){
    return(
        <section>
            <div className='photo-grid'>
                <div className='card1'>
                    <img src={props.img} alt='' className='card-img'/> 
                     <div className='details'>
                         <span> ⭐⭐</span>
                         <span> 5.6</span>
                         <span> (6) . </span>
                         <span>{props.country} </span>
                     </div>
                     <p>Life Lessons with {props.name} </p>
                     <p> From {props.pricing} / person </p>
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