import React from 'react';
import profile from '../Images/profile2.jpg';
import linkedin from '../Images/linkedin.jpg';
import github from '../Images/github-2.jpg';
import leetcode from '../Images/leetcode.jpg';
import instagram from '../Images/instagram.jpg';
import twitter from '../Images/twitter.jpg';
import stack from '../Images/stackOverflow.jpg';

const About = () => {
  return (
    <>
      {/* <div className='flex p-12 bg-black w-[70vw] h-[70vh] ml-auto mr-auto mt-[9vh] '>
        <div>
          <img className='w-3/4 inline' src={profile}></img><br />
          <img className='inline' src={linkedin} />
          <a className='text-white' href=''>Linkedin</a><br />
          <img className='inline' src={github} />
          <a className='text-white' href=''>GitHub</a><br />
          <img className='inline' src={leetcode} />
          <a className='text-white' href=''>Leetcode</a><br />
          <img className='inline' src={stack} />
          <a className='text-white' href=''>Stack Overflow</a><br />
          <img className='inline' src={instagram} />
          <a className='text-white' href=''>Instgram</a><br />
          <img className='inline' src={twitter} />
          <a className='text-white' href=''>Twitter X</a>

        </div>
        
        <div className='flex w-[50vw] justify-between'>
          <div>
            <h1 className='text-white'>Piyush Thakur</h1>
            <h3 className='text-blue-400'>Software Developer</h3>
          </div>
          <div>
            <button className='text-gray-600 bg-slate-400 font-bold  text-sm rounded-full border-2 border-solid border-transparent w-[5.5rem]'>Edit Profile</button>
          </div>


        </div>
        
      </div> */}
      <div className='grid gap-x-10 grid-cols-5 justify-between p-12 bg-black w-[70vw] h-[70vh] ml-auto mr-auto mt-[9vh]'>
      <div className='myItem inline row-span-2'>
      <img className='' src={profile}></img><br />
      </div>
      <div className='myItem col-span-3 '>
      <h1 className='text-white text-3xl font-bold'>Piyush Thakur</h1>
            <h3 className='text-blue-600 text-lg'>Software Developer</h3>
      </div>
      <div className='myItem col-span-1'>
      <button className='text-gray-600 bg-slate-400 font-bold  text-sm rounded-full border-2 border-solid border-transparent w-[5.5rem]'>Edit Profile</button>
      </div>
      <div className='myItem col-span-4 row-span-5 mt-7'>
      <h2 className='text-white text-2xl'>About</h2>
      <hr className='w-[45vw] border-4 border-solid rounded-3xl mt-2'></hr>
      <div className='mt-12'>
      <div className='flex justify-between items-center w-[37rem] mt-5'>
        <p className='text-white pl-9'>Username</p>
        <p className='text-blue-600 text-left'>piyush2411</p>
      </div>
      <div className='flex justify-between items-center w-[37rem] mt-5'>
        <p className='text-white pl-9'>Name</p>
        <p className='text-blue-600 text-left'>Piyush Thakur</p>
      </div>
      <div className='flex justify-between items-center w-[37rem] mt-5'>
        <p className='text-white pl-9'>Email</p>
        <p className='text-blue-600 text-left'>piyushthakur241199@gmail.com</p>
      </div>
      <div className='flex justify-between items-center w-[37rem] mt-5'>
        <p className='text-white pl-9'>Phone</p>
        <p className='text-blue-600 text-left'>+918077335703</p>
      </div>
      <div className='flex justify-between items-center w-[37rem] mt-5'>
        <p className='text-white pl-9'>Profession</p>
        <p className='text-blue-600 text-left'>Software Developer</p>
      </div>
      </div>
      

      </div>
      <div className='myItem'>
      <h2 className='text-white'>Profiles</h2>
      <hr className='w-40 border-4 border-solid rounded-3xl mt-1 mb-3 '></hr>
      <div className='mb-1'>
      <img className='inline  mt-[-0.5rem]' src={linkedin} />
          <a className='text-white ml-4 ' href=''>Linkedin</a><br />
      </div>
          <div className='mb-1'>
          <img className='inline mt-[-0.5rem]' src={github} />
          <a className='text-white ml-4' href=''>GitHub</a><br />
          </div>
          <div className='mb-1'>
          <img className='inline mt-[-0.5rem]' src={leetcode} />
          <a className='text-white ml-4' href=''>Leetcode</a><br />
          </div>
         <div className='mb-1'>
         <img className='inline mt-[-0.5rem]' src={stack} />
          <a className='text-white ml-4' href=''>Stack Overflow</a><br />
         </div>
        <div className='mb-1'>
        <img className='inline mt-[-0.5rem]' src={instagram} />
          <a className='text-white ml-4' href=''>Instgram</a><br />
        </div>
        <div className='mb-1'>
        <img className='inline mt-[-0.5rem]' src={twitter} />
          <a className='text-white ml-4' href=''>Twitter X</a>
        </div>
      </div>
      

      </div>
    </>
  )
}

export default About;
