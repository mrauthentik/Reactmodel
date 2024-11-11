import React from 'react'

export default function Card(){
    return(
        <section>
            <div className='photo-grid'>
                <div className='card1'>
                    <img src='/images/photo (1).jpg' alt='' className='card-img'/> 
                     <div className='details'>
                         <p> Ratings: ⭐⭐</p>
                         <p> Mario Luiz</p>
                         <p> 20$</p>
                     </div>
                   
                </div>
                <div className='card2'> 
                    <img src='/images/photo (2).jpg' alt='' className='card-img'/>
                    <div className='details'>
                        <p> Ratings: ⭐⭐⭐⭐⭐</p>
                        <p> Mario Luiz</p>
                        <p> 20$</p>
                    </div> 
                </div>
                <div className='card3'>
                    <img src='/images/photo (3).jpg' alt='' className='card-img'/>
                    <div className='details'>
                            <p> Ratings: ⭐⭐⭐</p>
                            <p> Mario Luiz</p>
                            <p> 20$</p>
                    </div>
                </div>
            </div>
          
            
        </section>
    )
}