import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  useEffect(()=>{
    setShow(true)
  },[])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const loginUser = async(e) =>{
    e.preventDefault();

   const res = await fetch('http://localhost:8000/signin',{
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
  
    body:JSON.stringify({
      email,
      password
    })
   });
   const data = await res.json();
   
   if(data.status===400 || !data){
    window.alert("Login Failed!");
    console.log("Login Failed");
   }else{
    window.alert("Login Successfully");
    navigate('/');
   }

  }

  return (
    <>
      <div className='flex text-white'>
        <div className='p-12 pl-28 min-w-[48vw]'>
          <h1 className='text-4xl pb-[1rem] font-bold'>Welcome,</h1>
          <h1 className='text-4xl font-bold'>back</h1>
        </div>
        <div data-aos="fade-left" className='min-w-[50vw] overflow-x-hidden p-[7rem] pl-[13rem] '>
          <form method = "POST">
          <div className={`${show ? `left-0` : `left-[50vw]`}  w-[23rem] relative transition-all ease-linear duration-700`}>
          <h1 className='text-4xl font-bold'>Login</h1>
          <p className='pt-4 pb-4'>Let's continue our journey together!</p>
          <button className='text-center border-2 border-solid border-white w-[23rem] rounded-lg p-2'>Sign In with google</button>
          <p className='text-center p-2'>or</p>
          <label className = "text-sm" for="">Email</label><br/>
          <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="email" placeholder="mail@website.com" value={email}
          onChange={(e) => setEmail(e.target.value)} 
          name="email" id="email" /><br/>

          <label className="text-sm"for="">Password</label><br/>
          <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="password" placeholder = "password" value={password} 
           onChange={(e) => setPassword(e.target.value)} 
            name="password" id="password" /><br/>
          <input className=' mt-2 mb-5 p-2 w-[23rem] border-2 border-solid border-white bg-white rounded-lg text-black hover:bg-black hover:text-white hover:border-black' type="submit" onClick={loginUser} name="Login" value="Login" />
          <p className='inline'>Not registered yet?</p> <NavLink className="" to="/Signup"><p className='hover:text-red-500 inline'>Create an Account</p></NavLink>
          </div>
          </form>


        </div>
      </div>
    </>
  )
}

export default Login;
