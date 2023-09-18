"use client"

import Show from '@/components/Show.js'
import axios from '@/utils/axios.js'
import React, {useState, useEffect, Suspense} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';

const page = () => {

  const [post, setpost] = useState([])
  const [show, setshow] = useState(false)
  // const [page, setpage] = useState(1)
  const [haseMore, sethaseMore] = useState(true)

  const getPost = async ()=>{
    try{
      const {data} = await axios.get(`/posts?_limit=10&_start=${post.length}`)
      setpost([...post,...data])
      console.log(data)
      if (data.length === 0)sethaseMore(false)
    }catch{
      console.log('error')
    }
  }

  console.log(post)

  // if(page === 0){
  //   alert("You Are Already On Top")
  //   setpage(1)
  // }
  // if(page === 11){
  //   alert("No More Post To Show")
  //   setpage(10)
  // }



  useEffect(() => {
    console.log("API called")
    getPost()
  }, [page])
  

  return (
    <div className='container p-4'>
      {/* <button className='btn btn-primary fs-4 px-4 mt-3' onClick={()=> setshow(!show)}>
        {!show ? "Show" : "Hide"}
      </button> */}

      {/* {show ? <Show /> : ""} */}

      <hr />
      <h1 className='bg-primary p-2 text-light'>Posts</h1>
      <hr />
      {/* <button className='btn btn-primary fs-4 px-4 mt-3' onClick={getPost}>See Posts</button> */}

      <ul className="list-group gap-2 fs-5 mt-3">

      <InfiniteScroll
        dataLength={post.length}
        next={getPost}
        hasMore={haseMore}
        loader={ <div style={{width : '100%', display: 'flex', justifyContent:'center'}}>
          <img src='https://media.tenor.com/JOkzmgju2T0AAAAM/ruko-zra-sabke-kro-hindustani-bhau-dhka-muki-nhi-krne-ka-hindustani-bhau.gif'></img>
          </div>
        }

        endMessage={ <div style={{width : '100%', display: 'flex', justifyContent:'center'}}>
          <img src='https://media.tenor.com/XRaqIsw6SgcAAAAC/rahul-gandhi-khatam.gif'></img>
          </div>
        }
      >

        {post.length > 0 && post.map((p)=>(

              <li className="p-4 list-group-item bg-warning-subtle d-flex justify-content-between text-start" key={p.id}>{p.id} : {p.title} <Link href={`/${p.id}`} className='fs-6'>know more</Link></li>

              ))}

      </InfiniteScroll>

      </ul>
      {/* <button onClick={()=> setpage(page-1)} className='btn btn-secondary me-3 mt-4'>prev</button>
      <button onClick={()=>setpage(page+1)} className='btn btn-primary mt-4'>next</button> */}
    </div>
  )
}

export default page