import React from 'react'

export const ButtonFill = ({children}) => {
  return (
    <button className='bg-sky-400 text-white px-7 py-3 rounded-full hover:bg-transparent hover:text-sky-500 shadow-sm font-semibold shadow-sky-500  md:text-sm text-xs tracking-wide md:px-9'>{children}</button>
  )
}

export function ButtonVideo({children}) {
    return (
        <button className='bg-transparent border-sky-400  px-7 py-3 rounded-full hover:bg-sky-400 hover:text-white text-sky-400 shadow-sm font-semibold shadow-sky-400  md:text-sm text-xs tracking-wide md:px-9'>{children}</button>
      )
}