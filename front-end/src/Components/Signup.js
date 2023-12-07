import React from "react";
import { Link } from 'react-router-dom';

 function Signup() {
  return (
    <div>
        <div  className='py-10 flex flex-col gap-3 items-center'>
            <form className='p-6 flex rounded-sm flex-col gap-3 shadow-lg border border-slate-300' action="/">
                <div>
                    <label  className='text-sm font-bold' htmlFor="YourName">Your Name</label>
                    <input id='YourName'  className='border sm:w-[300px] w-[250px] text-md rounded-md shadow-md p-1 block border-slate-200' type="text" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="email">Email</label>
                    <input  id='email' className='border text-md sm:w-[300px] w-[250px] rounded-md shadow-md p-1 block border-slate-200' type="email" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="MobileNumber">Mobile Number</label>
                    <input  id='MobileNumber' className='border sm:w-[300px] w-[250px] text-md rounded-md shadow-md p-1 block border-slate-200' type="text" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="Password">Password</label>
                    <input  id='Password' className='border sm:w-[300px] w-[250px] text-md rounded-md shadow-md p-1 block border-slate-200' type="password" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="PasswordAgain">Confirm Password</label>
                    <input  id='PasswordAgain' className='border sm:w-[300px] w-[250px] text-md rounded-md shadow-md p-1 block border-slate-200' type="password" />
                </div>
                <button onClick={()=>{alert("This is a dummy page, don't need to do SignUp/SignIn to use this app.")}} className='w-full py-2 my-3 text-medium text-white rounded-md text-md bg-[#48b3b4] text-center'>Continue</button> <hr />
                <p className='text-sm font-semibold'>Already have an account?<span className='text-sky-800'><Link to='/signin' > Sign In</Link></span> </p>
            </form>
            
        </div>
    </div>
  )
}

export default Signup;
