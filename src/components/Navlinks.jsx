import React from 'react'
import { Link } from 'react-router-dom'

export const Navlinks = () => {


const Links = [
    
 {
       name :"Location",
       path: "/"     
  }
,
{
    name :"Blogs",
    path: "/" 
},
{
    name :"Testimonials",
    path: "/"  
},
{
    name :"Contact",
    path: "/contact"
}
]


return(
    <>
    {
        Links.map((link,i)=>(
            <li key={i} className=' font-semibold hover:text-sky-400'>
              <Link  to={link.path}>{link.name}</Link>
            </li>
        ))
    }
    </>
)
  
}
