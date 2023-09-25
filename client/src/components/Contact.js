import React from 'react';
import mail from '../Images/mail-2.png';
import phone from '../Images/phone.png';
import address from '../Images/address.png'

const Contact = () => {
    return (
        <>
            {/* <div class="cont">
        <div class="phone">
            <p>Phone</p><br/>
            <p>+918077335703</p>

        </div>
        <div class="email">
            <p>Email</p><br/>
            <p>piyushthakur241199@gmail.com</p>

        </div>
        <div class="address">
            <p>address</p><br/>
            <p>Saharanpur</p>

        </div>
    </div>
    <div class="ff">
        <form action="">
            <input type="text" name="" id="" placeholder="Your name"/><br/>
            <input type="text" name="" id="" placeholder="Your email"/><br/>
            <input type="text" name="" id="" placeholder="Your phone number"/><br/>
            <textarea id="w3review" name="w3review" rows="4" cols="50"/>
            <input type="submit" value="Send message"/>

        </form>
    </div> */}
            <div className='flex items-center justify-around mt-14'>
                <div className='p-3 flex justify-evenly w-[22rem] border-4 border-solid border-white rounded-xl'>
                    <div className='p-3'>
                        <img className='' src={mail} />
                    </div>
                    <div>
                        <p className='text-white'>Email : </p>
                        <p className='text-white'>piyushthakur241199@gmail.com</p>
                    </div>

                </div>
                <div className='p-3 flex justify-evenly w-[13rem] border-4 border-solid border-white rounded-xl'>
                    <div className='p-3'>
                        <img className='' src={phone} />
                    </div>
                    <div>
                        <p className='text-white'>Phone : </p>
                        <p className='text-white'>+918077335703</p>
                    </div>

                </div>
                <div className='p-3 flex justify-evenly w-[13rem] border-4 border-solid border-white rounded-xl'>
                    <div className='p-3'>
                        <img className='' src={address} />
                    </div>
                    <div>
                        <p className='text-white'>Address : </p>
                        <p className='text-white'>Saharanpur - U.P.</p>
                    </div>

                </div>

            </div>
            <div className='p-32'>
                <h1 className='text-4xl font-bold text-white'>Get in touch with us</h1>
                <div className='mt-8'>
                    <form method="POST">
                        <label className="text-white text-xl m-1.5 mr-[3.2rem]" for="">Your Name : </label>
                        <input className='bg-transparent border-2 w-[60vw] mb-5 p-1.5 border-solid border-white ' type="text" name="" id="" placeholder="Your name" /><br />
                        <label className="text-white text-xl m-1.5 mr-[3.5rem]" for="">Your Email : </label>
                        <input  className='bg-transparent w-[60vw] mb-5 p-1.5 border-2 border-solid border-white ' type="text" name="" id="" placeholder="Your email" /><br />
                        <label className="text-white text-xl m-1.5 mr-4" for="">Your Phone No : </label>
                        <input className='bg-transparent w-[60vw] mb-5 p-1.5 border-2 border-solid border-white ' type="text" name="" id="" placeholder="Your phone number" /><br />
                        <div className='flex items-center'>
                        <label className="text-white text-xl m-1.5 mr-[2rem]" for="">Your message : </label>
                        <textarea className='bg-transparent border-2 w-[60vw] border-solid border-white ' id="" name="" rows="4" cols="50"/><br/>
                        </div>
                        <input className='bg-white p-[0.8rem] border-2 border-solid rounded-full text-black mt-12' type="submit" value="Send message" />

                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact;
