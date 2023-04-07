import { Avatar } from '@mui/material';
import React, {useState} from 'react'
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue(); //from provider

    //we need a piece of state to do something with the input we receive from "whats on your mind?" input
    const [input, setInput] = useState('');
    //we need a piece of state to do something with the image url inserted by user too
    const [imageUrl, setImageUrl] = useState('');

    //whenever we have an onclik it takes an event 
    const handleSubmit = (e) => {
        e.preventDefault(); //avoids the refreshing react hates refreshing

        //slick DB stuff to store data input from the user
        //to update the data in firebase db instead of how we first manually did it in the firestore
        db.collection('posts').add({ //we add an object
            message: input, //we mad msg to our input 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), //outputs timestamp of database so depending where we are is the time zone
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput('');
        setImageUrl('');
    };

  return (
    <div className='messageSender'>
          <div className='messageSender__top'>
              <Avatar src={user.photoURL} />
              <form> {/* Note by default input type is text so we dont need to type="text" */}
                  <input /*slick way of getting input from user*/
                      value={input} /*input we get typed in is stored in value */
                      onChange={ /*onchange will fire up an event every time we start typing in the 'whats on your mind?' */
                          (e) => setInput(e.target.value)
                      }
                      className='messageSender__input'
                      placeholder={`What's on your mind?, ${user.displayName}`}
                  />
                  <input
                      value={imageUrl} /*input we get typed in is stored in imageUrl */
                      onChange={ /*onchange will fire up an event every time we start typing in the 'whats on your mind?' */
                          (e) => setImageUrl(e.target.value)
                      }
                      placeholder='image URL (Optional)' />
                  {/* hidden button crucial for that razzle dazzle */}
                  <button onClick={handleSubmit} type="submit">
                      Hidden submit
                  </button>
              </form>
          </div>
          <div className='messageSender__bottom'>
              <div className='messageSender__option'>
                  <VideocamIcon style={{ color: "red" }} />
                  <h3>Live Video</h3>
              </div>
              <div className='messageSender__option'>
                  <PhotoLibraryIcon style={{ color: "green" }} />
                  <h3> Photo/Video</h3>
              </div>
              <div className='messageSender__option'>
                  <MoodIcon style={{ color: "orange" }} />
                  <h3> Feeling/Activity</h3>
              </div>
          </div>
    </div>
  )
}

export default MessageSender