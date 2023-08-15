import React from 'react'
import './InfoCards.css';
export default function InfoCards({InfoCardsDate,InfoCardsQuestion,InfoCardsParagraph,InfoCardsAuthor,InfoCardsImg}) {
  return (
    <div className='infoCardsWrapper'>
      
      <div className='infoCardsLeftSide'>

        <img className='infoCardsImg' src={InfoCardsImg}/>

      </div>

      <div className='infoCardsRightSide'>

        <div className='infoCardsDate'>
          <p className='infoCardsDateText'>{InfoCardsDate}</p>
        </div>

        <h1 className='infoCardsQuestion'>{InfoCardsQuestion}</h1>

        <p className='infoCardsParagraph'>{InfoCardsParagraph}</p>

        <p className='infoCardsAuthor'>{InfoCardsAuthor}</p>

      </div>

    </div>
  )
}
