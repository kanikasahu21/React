// import React from 'react'

// const Wrapper = (props) => {
//   return (
//     <div className='rounded bg-red-300 h-[90%] w-auto'>{props.children}</div>
//   )
// }

// export default Wrapper




// import React, { createContext } from 'react'
// import { useState } from 'react'
// // Steps for creating context in your react application for efficient working for passing the data all over the application whereever you want

// // Step - 1 : Wrap your whole application (app) with a higher order component(HOC) 

// // Step - 2 : create context which is given bydefault by react and its initial value sets to null and export it using const outside the wrapper function or higher order component(that type of component which returns functions with some extra functionalities)

// export const datacontext = createContext(null)
// const Wrapper = (props) => {
//   const [data, setdata] = useState("Very important file")
//   return (

//     // Step - 3: Wrap props.children or data with contextname.provider and pass the value in it which you have set using usestate snippet

//     <datacontext.Provider value={[data, setdata]}>
//       {props.children}
//     </datacontext.Provider>
//   )
// }

// export default Wrapper