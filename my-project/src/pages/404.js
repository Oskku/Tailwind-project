import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-full h-auto text-center py-16">
        <h1 className="text-3xl font-bold m-5 xl:m-16 xl:text-5xl">Page not found</h1>
        <h3 className="text-2xl mb-10 xl:text-3xl xl:mt-5 xl:mb-20">ErrorPage! 404</h3>
        <button className="text-xl xl:text-2xl text-white bg-indigo-600 px-5 py-3 rounded ">
            <Link to="/">Back to Home</Link>
        </button>
        
    </div>
  )
}

export default NotFound