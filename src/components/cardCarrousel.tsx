import React from 'react'

type Props = {
  tittle: string;
  content: string;
}

export const CardCarrousel = ({ tittle, content}: Props) => {
  return (
    <div className='cardCar'>
        <div className="content">
            <span className="Card-titty">{tittle}</span>
            <div className="Card-data">
                {content}
            </div>
        </div>
    </div>
  )
}