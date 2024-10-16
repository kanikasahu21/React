// How to implement raw css using wrapper 
// / import React from 'react'
// import Footer from './components/Footer.jsx'
// import Navigation from './components/Navigation.jsx'
// import Wrapper from './utils/Wrapper.jsx'
// const App = () => {
//   return (
//     <div>
//       <Wrapper>
//         <Navigation text="Hello"/>
//       </Wrapper>
//       <Wrapper>
//       <Footer text="Heyyy"/>
//       </Wrapper>
//     </div>
//   )
// }


// export default App


// How to implement raw css in a particular file using the same name as the file name (filename.module.css)
// import React from 'react'
// import Footer from './components/Footer.jsx'
// const App = () => {
//   return (
//     <div>
//      <Footer text="Hey i am Kanika"/>
//     </div>
//   )
// }

// export default App


// import { useContext } from "react"
// import { datacontext } from "./utils/Wrapper"

// const App = () => {
//   //  Step - 4 : Use usecontext which is given by react and under it pass the datacontext in it.
//   const [data, setdata] = useContext(datacontext)
//   console.log(data)
//   return (
//     <div>App</div>
//   )
// }

// export default App