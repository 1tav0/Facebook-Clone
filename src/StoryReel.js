import React from 'react'
import './StoryReel.css'
import Story from './Story.js'
const StoryReel = () => {
  return (
      <div className='storyReel'>
          {/* story */}
          <Story image="https://i.scdn.co/image/ab67616d0000b2734219f4f48a27b891d4f8295b"
              profileSrc="https://i.pinimg.com/474x/02/3e/eb/023eebc4bcee84dda420da10d3fe1c91.jpg"
              title="Tavo" />
          {/* story */}
          <Story image="https://pm1.narvii.com/6378/b811dafdba05f6a1c42066e2a6b616d042c703ef_hq.jpg"
                profileSrc="https://pm1.narvii.com/6543/8de18197fc46b84818413a197bf52c78d91eb9e7_hq.jpg"
              title="Bob" />
          {/* story */}
          <Story image="https://i.scdn.co/image/ab67616d0000b2734219f4f48a27b891d4f8295b"
              profileSrc="https://i.pinimg.com/474x/02/3e/eb/023eebc4bcee84dda420da10d3fe1c91.jpg"
              title="Tavo" />
          {/* story */}
          <Story image="https://pm1.narvii.com/6378/b811dafdba05f6a1c42066e2a6b616d042c703ef_hq.jpg"
                profileSrc="https://pm1.narvii.com/6543/8de18197fc46b84818413a197bf52c78d91eb9e7_hq.jpg"
                title="Bob" />
          {/* story */}
          {/* story */}
          <Story image="https://i.scdn.co/image/ab67616d0000b2734219f4f48a27b891d4f8295b"
              profileSrc="https://i.pinimg.com/474x/02/3e/eb/023eebc4bcee84dda420da10d3fe1c91.jpg"
              title="Tavo" />
          
      </div>
  )
}

export default StoryReel