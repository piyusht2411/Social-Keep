import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [show, setShow] = useState(false)

  useEffect(()=>{
    setShow(true)
  },[])

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })

  }

  const postData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch('http://localhost:8000/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if (data.Status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");

    }
    else {
      window.alert("Successfully registration");
      console.log("Successfully Registration");
      navigate('/Login');
    }


  }

  return (
    <>

      <div className='flex text-white'>
        <div className='p-12 pl-28 min-w-[48vw]'>
          <h1 className='text-4xl pb-[1rem] font-bold'>Welcome</h1>
        </div>
        <div className='min-w-[50vw] p-[7rem] pl-[13rem] pt-[4.5rem]'>
          <form method='POST'>
          <div className={`${show ? `left-0` : `left-[50vw]`}  w-[23rem] relative transition-all ease-linear duration-700`}>
              <h1 className='text-4xl font-bold'>Sign Up</h1>
              <p className='pt-4 pb-4'>Let's continue our journey together!</p>
              <button className='text-center border-2 border-solid border-white w-[23rem] rounded-lg p-2'>Sign In with google</button>
              <p className='text-center p-2'>or</p>
              <label className="text-sm" for="">Name</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="text" placeholder='name' value={user.name} onChange={handleInput} name="name" id="name" /><br />
              <label className="text-sm" for="">Email</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="email" placeholder='mail@website.com' value={user.email} onChange={handleInput} name="email" id="email" /><br />
              <label className="text-sm" for="">Phone no</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="number" placeholder='0123456789' value={user.phone} onChange={handleInput} name="phone" id="phone" /><br />
              <label className="text-sm" for="">Profession</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="text" placeholder='profession' value={user.work} onChange={handleInput} name="work" id="work" /><br />

              <label className="text-sm" for="">Password</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="password" placeholder="password" value={user.password} onChange={handleInput} name="password" id="password" /><br />
              <label className="text-sm" for="">Confirm Password</label><br />
              <input className=' mt-2 mb-5 w-[23rem] border-2 border-solid border-white p-2 bg-transparent placeholder:text-zinc-300 placeholder:text-sm rounded-lg' type="password" placeholder="confirm password" value={user.cpassword} onChange={handleInput} name="cpassword" id="cpassword" /><br />
              <input className=' mt-2 mb-5 p-2 w-[23rem] border-2 border-solid border-white bg-white rounded-lg text-black hover:bg-black hover:text-white hover:border-black' type="submit" onClick={postData} name="Login" value="Sign Up" />
              <p className='inline'>Already have an account?</p> <NavLink className="" to="/Login"><p className='hover:text-red-500 inline'>Sign In here!</p></NavLink>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}

export default Signup;
