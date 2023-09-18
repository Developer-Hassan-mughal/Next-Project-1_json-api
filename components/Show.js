// "use client"
// import React, {useEffect, useState} from 'react'

// const Show = () => {

//   const [num, setnum] = useState(0)
//   const [page, setpage] = useState(0)

//     useEffect(() => {


//       console.log("updated")

//       // setTimeout(()=>{

//       //   setpage(page+1)
       
//       // }, 1000)
    
//       return () => {
//         alert("do yo realy want to leave this page")
//       }
//     }, [page])
    
//   return (
//     <div className='container mt-3 mb-3 p-4'>
//       <h1>change no. {num}</h1>
//       {/* <button onClick={()=> setnum(num+1)}>add value +1</button> */}
//       <button className='btn btn-secondary fs-4 px-4 mt-3 me-3' onClick={()=> setnum(num-1)}>-</button>
//       <button className='btn btn-primary fs-4 px-4 mt-3' onClick={()=> setnum(num+1)}>+</button>

//       <hr />
//       <h2>page : {page}</h2>
//       {/* <button onClick={()=> setpage(page+1)}>change page</button> */}
//       <button className='btn btn-secondary fs-4 px-4 mt-3 me-3' onClick={()=> setpage(page-1)}>page -</button>
//       <button className='btn btn-primary fs-4 px-4 mt-3' onClick={()=> setpage(page+1)}>page +</button>


//     </div>
//   )
// }

// export default Show