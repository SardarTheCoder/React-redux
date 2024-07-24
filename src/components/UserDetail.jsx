import React from 'react'
import DeleteAll from './DeleteAll'
import { fakeUserData } from './Api';
import { useDispatch } from 'react-redux';
import { addUser } from './store/slices/UserSlice';
import DisplayUser from './store/slices/DisplayUser';

const UserDetail = () => {
  const dispatch = useDispatch();
  const name="ali";
  const handleaddUser=(name)=>{
dispatch(addUser(name));
console.log(name);
  };
  return (
    <>
       <div className="font-bold text-3xl text-center flex justify-between p-20 text-gray-500 mt-5" >
        <p className="underline ">
             List of User:
            </p>
           <button className="bg-slate-500  text-white rounded-md p-3 hover:bg-black hover:text-white hover:transition-all hover:w-60
           " onClick={()=>handleaddUser(fakeUserData())}>Add user</button>
         </div>
         <ul className='bg-gray-400 rounded-lg font-serif text-2xl '>
       <DisplayUser/>
        
         </ul>
         <hr className="bg-gray-600 rounded-lg h-2 w-[72%] mt-2 ml-[15%]"/>
        <DeleteAll/>
    </>
  )
}

export default UserDetail
   