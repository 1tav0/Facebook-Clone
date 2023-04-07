import React, {useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'
import { useStateValue } from './StateProvider';
import db from "./firebase";
const Feed = () => {
  //memory to keep track of the posts
  const [posts, setPosts] = useState([]);

  useEffect(() => { //need to run a piece of code only once when the user info aka feed component loads
    db.collection('posts')
      .orderBy("timestamp", "desc") //most recent posts show at the top
      .onSnapshot((snapshot) => //we access the 'posts' db collection, snapshot is a real life snapshot that will be taken and pushed to our code any time any of the data in the db collection gets modified
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))) //when we get the snapshot we update the docs, bascially an array we map through it, and for each one we wanna return a custom object
    );//basically real life connection to db, it maps to the state, extremely performent
  }, []) //keeping brackets empty means no dependencies so will run once

  // const [{ user }, dispatch] = useStateValue(); //from provider
  return (
      <div className='feed'>
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender  */}
        <MessageSender />
        {/* Postbar */}
        {/* <Post
          profilePic="https://www.talkesport.com/wp-content/uploads/free-fire-ronando-b124.jpg"
          message="Wow"
          timestamp="timestamp"
          username={user.displayName}
          image="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-11/World-Cup-trophy-stylized-images-%233-%2816x9%29.jpg?itok=EVK4Dnsxhttps://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-11/World-Cup-trophy-stylized-images-%233-%2816x9%29.jpg?itok=EVK4Dnsx"
        />
        <Post />
        <Post /> */}
      {posts.map(post => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
        ))}
      </div>
  )
}

export default Feed