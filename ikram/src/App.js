// import React from 'react'

// export default function App() {
//   var p = <p>hello world</p>

//   return (
//     <div>{p}</div>
//   )
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------
//statique

// import React from 'react'

// export default function App() {
//   let a = <ul style={{color:"red"}}>
//     <li>ele1</li>
//     <li>ele2</li>
//     <li>ele3</li>
//   </ul>
//   return (
//     <div>
//       {a}
//     </div>
//   )
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------
// dynamique

// import React from 'react'

// export default function App() {
//   var element = ["element1", "element2", "element3", "element4"];
//   var liste = <ul>
//       {
//       element.map(function(elem,i){
//         return <li key={i}>{elem}</li>
//       })
//        }
//   </ul>;
//   return (
//     <div>{liste}</div>
//   )
// }
//------------------------------------------------------------------------------------------------------------------------------------------------
//arrow function or fonction flechee 
import React from 'react'

export default function App() {
  var element = ["element1", "element2", "element3", "element4"];
  var liste = <ul>
      {
      element.map((elem,i) => <li key={i}>{elem}</li>)
      }
       
  </ul>;
  return (
    <div>{liste}</div>
  )
}


