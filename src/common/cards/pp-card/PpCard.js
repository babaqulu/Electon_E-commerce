import React from 'react'
import './PpCard.css'
export default function PpCard({ppCardParagraph,ppCardName,ppCardProfilePhoto}) {
  return (
    <div className='ppCardWrapper'>

      <div className='ppCardUpperSide'>

        <div className='ppCardProfilePhotoWrapper'>

          <div className='ppCardProfilePhotoCircle'>

            <img className='ppCardProfilePhoto' src={ppCardProfilePhoto} />

          </div>

        </div>

        <h1 className='ppCardName'>{ppCardName}</h1>

      </div>
      
      <div className='ppCardBottomSide'>

        <p className='ppCardParagraph'>
          {ppCardParagraph}
        </p>

      </div>

    </div>
  )
}
