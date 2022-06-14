import React from 'react'
import { format } from 'date-fns'



export default function head() {
  const weekDate = format(new Date(), 'dd.MM.yyyy HH:mm');
  return (
    <div className='header'>
      <div className='logo'>
        

        
      </div>
      <div >
        <h2>

        </h2>
      </div>
      <div>

      </div>
      <div className='date'>
        <h2>
          {weekDate}
        </h2>
      </div>
    </div>
  )
}


