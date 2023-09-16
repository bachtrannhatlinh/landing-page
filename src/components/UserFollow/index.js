import React from 'react'
import './styled.scss'

function UserFollow({ userFollow }) {
  const { url, name, time } = userFollow
  return (
    <div id='user-follow'>
      <div className='img'>
        <img src={url} />
      </div>
      <div className='name'>{name}</div>
      <div>{time}</div>
    </div>
  )
}

export default UserFollow