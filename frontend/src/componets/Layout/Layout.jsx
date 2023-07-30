import React, { useState, useEffect, useRef } from 'react'
import Sidebar from './Sidebar'
import Header
  from './Header'
  import { useOutsideClick } from "../../hooks/useOutsideClick";
const Layout = ({ children }) => {
  const [check, setCheck] = useState(false)
  const ref = useRef();
  const hamburgerRef=useRef()
  useOutsideClick(ref?.current, () => {
    if (check) {
      setCheck(false);
    }
  },'hame');
  return (
    <div className='flex overflow-hidden h-full '>
      <Sidebar check={check} setCheck={setCheck}  forwardRef={ref} />
      <div className='flex flex-col w-full xl:ml-[18rem] lg:ml-[14rem] ' >
        <Header check={check} setCheck={setCheck} />
        {children}
      </div>
 
    </div>
  )
}

export default Layout