import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl p-4 m-4'>This is Contact Page</h1>

        <form>
          <input type = "text" className ="border border-black p-2 m-2" placeholder='name'/>
          <input type = "text" className = "border border-black p-2 m-2" placeholder='message'/>
          <button className='border border-black p-2 m-2 text-white bg-slate-500 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
