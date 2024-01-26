'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title)
    // console.log(desc)
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0){
    renderTask = mainTask.map((t,i) =>{
    return(
      <li>
        <div className='flex justify-between items-center m-2'>
          <h5 className=' text-white'>{t.title}</h5>
          <h6 className='text-white'>{t.desc}</h6>
          <button onClick={()=>{
          deleteHandler(i)
          }}
          className='bg-red-500 rounded text-2xl px-5'>DELETE</button>
        </div>
      </li>
    );
  });
}
  

  return (
    <>
      <h1 className='bg-neutral-900 text-stone-50 text-center text-5xl p-5'>My Todo's List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className=' text-xl border-zinc-800 border-2 m-5 p-2' placeholder='Enter Task here...'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <input type='text' className=' text-xl border-zinc-800 border-2 m-5 p-2' placeholder='Enter Description here...'
        value={desc} 
        onChange={(e)=>
        setdesc(e.target.value)}/>
        <button className='bg-green-500 p-2 text-xl rounded m-5'>Add Task</button>
      </form>

      <hr />
      <div className=' bg-zinc-400 p-8'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page