// DisplayUser.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteUser } from './UserSlice';

const DisplayUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const deleteSUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <ul>
      {users.map((user) => (
        <li className='p-2 flex items-center justify-between' key={user.id}>
          <div>{user}</div>
          <div>
            <button className='text-3xl text-red-700' onClick={() => deleteSUser(user.id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUser;




