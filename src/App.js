import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const user = null; //the user varible
  //we destructure the state component we got from user
  // const [state, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();
  //after the popup for the login, we are only able to display the
  //user info in the console but we still have not been able to redirect
  //the page to the front end we have created with the users info
  // we will use React Context API/REDUX to wrap our whole app div aka data layer
  // regardless of nested components we can use anything in the data layer in the wrapper
  //essentially we push the user (Login) into the data layer and then they can access any component 
  //in there like in an array whether as prop drilling where we access the components in like a 
  //linked list from root always to whatever they at
  
  return ( 
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
         {/* Header */}
         <Header />
         {/* App Body */}
         <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
