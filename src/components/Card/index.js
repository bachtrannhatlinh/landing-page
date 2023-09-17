import React from 'react'
import './styled.scss'

export default function Card({ item }) {
  const { name, url, avatar } = item
  return (
    <div id='card-item'>
      <div className='img'>
        <img src={url} />
      </div>
      <div className='content'>
        <h5>2020 World Champs Gaming Warzone</h5>
        <div className='content-des'>
          <div className='avatar'>
            <img src={avatar} />
          </div>
          <div className='des-user'>
            <div>{name}</div>
            <div>description</div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>live</div>
        <div>4 2K watching</div>
      </div> */}
    </div>
  )
}
