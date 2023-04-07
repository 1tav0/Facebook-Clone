import React, { createContext, useContext, useReducer } from "react";
//essentially this file has our data to user

//  a context is an object used to share state or data between different parts of an application.
// allows you to pass data through the component tree without having to pass props down manually at every level
//created using the createContext function and then provided to components using a Provider component.
// Components to access the data from the context object use a useContext hook
//help you avoid prop drilling, where you have to pass props down through multiple levels of the component hierarchy just to get to a specific child component that needs the data
/**The StateContext is a context object that will be used to store and manage the application's state
 * The StateProvider is a higher-order component that wraps the application and provides the StateContext to the application via the Context API
 * The useStateValue hook is a way for components to access the state stored in the StateContext
 * The reducer function is a way to update the state in a predictable way, and the initialState is the starting state for the application.
 * children is a prop that refers to any nested components that are nested inside the component when it is used
 */
export const StateContext = createContext(); //preparing data layer aka higher data component

//we will use it to wrapp our app AKA HIGHER ORDER COMPONENT
export const StateProvider = ({ reducer, initialState, children }) => ( //this allows us to have a stateprovider that we use to wrap our app
    <StateContext.Provider value={useReducer(reducer, initialState)}> {/*provides the data functionality */}
        {children} {/*components*/}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //whenever we want to get the data from the stateprovider we use this hook
