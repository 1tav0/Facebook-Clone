import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';
const SidebarRow = ({ src, Icon, title }) => { //props/title are the properties we named or rows in the sidebar */
  return (              //note the capital Icon not icon because we are passing a component as a property
      <div className='sidebarRow'>
          {src && <Avatar src={src} />} {/* if we pass in a src then show the avatar and let is src be that src */}
          {Icon && <Icon />} {/* if we pass in an icon then only then render the icon */}
          <h4>{title}</h4>  
    </div>
  )
}

export default SidebarRow