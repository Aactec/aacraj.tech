import React from 'react'
import about from './../asset/image/me2 1.png';
import { FaDownload } from "react-icons/fa";

const AboutComponent = () => {
    return (
        <section className='m-auto w-[90%] py-14' id="about">
            <h3 className='text-center text-2xl font-bold py-12 font-russo'>About</h3>
            <div className="flex flex-col items-center gap-8">
                <img src={about} alt="" />
                <div className="font-revalia">
                    <h4 className='py-2 text-xl'>About Me</h4>
                    <p className='text-sm'>Web developer, with extensive knowledge and years of experience, working with web technologies and designs, delivering quality work</p>
                    <div className='flex flex-col gap-1 pt-3'>
                        <p className='px-0.5 border border-primary rounded-md'>Html</p>
                        <p className='px-0.5 border border-primary rounded-md'>Css</p>
                        <p className='px-0.5 border border-primary rounded-md'>Tailwind</p>
                        <p className='px-0.5 border border-primary rounded-md'>Javascript</p>
                        <p className='px-0.5 border border-primary rounded-md'>React</p>
                    </div>
                    <button type="button" className='flex items-center gap-1 bg-primary px-4 py-2 my-6 rounded-md font-redrose text-sm text-white hover:bg-secondaryfirst'>Download CV<FaDownload /></button>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;