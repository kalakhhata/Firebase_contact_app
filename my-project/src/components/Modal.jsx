import React from 'react'
import ReactDom from 'react-dom'
import {AiOutlineClose} from "react-icons/ai";

function Modal({onClose,isOpen,children}) {
  return ReactDom.createPortal(
    <>
      {isOpen && (
        <>
        <div className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4'>
            <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            <div>{children}</div>
        </div>
        <div onClick={onClose} className='backdrop-blur h-screen w-screen absolute top-0 z-40'>

        </div>
        </>
        )}  
    </>
  ,document.getElementById("modal-root"))
}

export default Modal