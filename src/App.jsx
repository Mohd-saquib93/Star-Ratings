import React, { useState } from 'react'

const App = () => {

  const [rating,setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className='App flex flex-col justify-center items-center mt-8'>
      <h1 className='font-bold text-4xl'>Star Ratings</h1>
      <div>
        {
          [1,2,3,4,5].map((num)=>(
            <button 
            onClick={()=>setRating(num)}
            onMouseOver={()=> setHover(num)}
            onMouseLeave={()=>setHover(rating)}
            className='border-1 text-6xl p-2 mt-5 m-2 border-none cursor-pointer'>
              <span className='{star ${num <=(rating) && hover }'>★</span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default App