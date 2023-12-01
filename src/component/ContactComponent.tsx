import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import mapimg from './../asset/image/map4.png';

function ContactModalComponent() {
    return (
        <section className='m-auto w-[90%] py-8' id='contact'>
            <h3 className='text-center text-2xl font-bold py-12 font-russo'>Contact Me</h3>
            <div className='flex flex-col gap-8 font-revalia'>
                <div>
                    <img src={mapimg} alt="" />
                </div>
                <div className='grid gap-2 max-w-[32rem] w-[100%]'>
                    <input className='px-4 py-2 rounded-md outline-none' type="text" name="" id="" placeholder='First Name'/>
                    <input className='px-4 py-2 rounded-md outline-none' type="text" name="" id="" placeholder='Last Name'/>
                    <input className='px-4 py-2 rounded-md outline-none' type="email" name="" id="" placeholder='Email' />
                    <textarea className='px-4 py-2 rounded-md outline-none' name="" id="" placeholder='Message' cols={8} rows={6}></textarea>
                    <button type="submit" className='flex items-center gap-2 w-[100%] max-w-[12rem] px-8 py-2 rounded-md bg-primary font-redrose my-2 text-white text-sm hover:bg-secondaryfirst'>Send Message<FaTelegramPlane/></button>
                </div>
            </div>
        </section>
    );
}

export default ContactModalComponent;