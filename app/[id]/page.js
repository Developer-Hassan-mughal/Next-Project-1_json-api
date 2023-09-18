'use client'
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css"
import { singlePost } from '@/utils/singlePost'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'



const page = ({params}) => {

  const [posts, setposts] = useState([])

  const single = ()=>{
    try {
        singlePost(params.id).then((value)=>{
        setposts(value)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  if(posts.id === 1 || posts.id === 100){
      toast.info('No More Posts To Show')
    }
    
    useEffect(() => {
      single()
    },[])


  return (
    <div className='container mt-2 p-5 d-flex align-items-center justify-content-center'>
      <div className="card" style={{width: "18rem"}}>
      {posts.length !== 0 ?
        <div className="card-body">
            <h5 className="card-title mb-3">Post Count : {posts.id}</h5>
            <h6 className="card-subtitle mb-3 text-body-secondary">{posts.title}</h6>
            <p className="card-text">{posts.body}</p>
            <Link href={`${posts.id === 1 ? `/${posts.id}`:`/${posts.id - 1}`}`} className="card-link btn btn-secondary">Prev Post</Link>

            <Link href={`${posts.id === 100 ? `/${posts.id}` : `/${posts.id + 1}`}`} className="card-link btn btn-primary ms-5">Next Post </Link>
        
        </div>
        :  
        <img src="https://miro.medium.com/v2/resize:fit:656/1*koDGIkb-ajRfOeXXwQktJw.gif" alt="" />
      }

      </div>
    </div>
  )
}

export default page



// 'use client'
// import {singlePost} from '@/utils/singlePost'
// import React from 'react'

// const page = async ({params}) => {
//   const post = await singlePost(params.id)

//   return (
//     <div>{JSON.stringify(post)}</div>
//   )
// }

// export default page