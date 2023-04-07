import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'
const Story = ({image, profileSrc, title}) => {
  return (
      <div style={{ backgroundImage: `url(${image})` }}
          className='story'> {/* the style is inline css styling right from js file in this case the background is the story we can see a pic of what it is before clicking it  */}
          <Avatar className='story__avatar' src={profileSrc} />
          <h4>{title}</h4>
      </div>
  )
}

export default Story