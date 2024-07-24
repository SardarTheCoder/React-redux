
import UserDetail from "./UserDetail"


const Nav = () => {
  return (
    <>
    <p className="text-gray-600 mt-5
     font-sans font-bold text-xl text-center">Welcome,to the website </p>
     <h1 className="text-7xl font-serif font-extrabold mt-5  text-gray-500 text-center">Admin Table</h1>
     <h1 className="text-2xl font-serif font-bold mt-5  text-gray-600 text-center">One distination for all Web Development Platform</h1>

       <ul className="list-none text-gray-400 text-4xl  font-bold flex justify-center gap-16 mt-10 bg-gray-300
        w-[90%] ml-[5%] rounded-lg p-5">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Course</li>
        <li>Content</li>
       </ul>
      
    </>
  )
}

export default Nav
