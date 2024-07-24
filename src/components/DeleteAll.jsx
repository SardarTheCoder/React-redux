import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from './store/slices/UserSlice';

const DeleteAll = () => {
  const dispatch=useDispatch();

  const deleteUser=()=>{
    dispatch(removeUser());
  }
  return (
    <>
    <button className="bg-slate-500 text-white rounded-md p-3 ml-[83%] mt-5 font-bold text-3xl
          hover:bg-black hover:text-white hover:transition-all hover:w-60" onClick={deleteUser}
         >Clear All</button>
    </>
  )
}

export default DeleteAll
