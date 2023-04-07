import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
        <iframe /*rendering a piece of browser inside another browser */
            src='https://www.youtube.com/embed/B-kxUMHBxNo'
            width='340'
            height='100%'
            style={{ border: 'none', overflow:'hidden'}}
            scrolling="no"
            frameBorder="0"
            allowTransparency='true'
            allow='encrypted-media'
        ></iframe>
    </div>
  )
}

export default Widgets