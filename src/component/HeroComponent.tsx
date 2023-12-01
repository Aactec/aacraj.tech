import React from 'react';
import polygon from './../asset/image/Polygon 1.png';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
// import ModalComponent from './ModalComponent';

const HeroComponent = () => {
    return (
        <>
            <section className='flex flex-col-reverse gap-8 m-auto w-[90%]'>
            <div className="font-revalia w-[100%]">
                <p className='bg-primary px-4 py-2 w-24 rounded-t-2xl rounded-r-2xl font-redrose my-2 text-white'>Hello I'm</p>
                <h1 className='text-4xl font-extrabold font-russo'>Al-ameen Raji</h1>
                <h3 className='text-sm pb-1'>I'm a Front-end Developer</h3>
                <p className='text-xs'>High Level experience in web design and development knowledge, producing quality work.</p>
                <button type="button" className='px-8 py-2 rounded-md bg-primary font-redrose my-6 text-white text-sm hover:bg-secondaryfirst'>HIRE ME</button>
                <div className='flex gap-16 pt-4'>
                    <a href="https://www.linkedin.com/in/aacraj-tech"><FiLinkedin  className='text-3xl hover:text-secondaryfirst'/></a>
                    <a href="https://twitter.com/Aacraj_tech"><RiTwitterXFill  className='text-3xl hover:text-secondaryfirst'/></a>
                    <a href="https://github.com/Aactec"><FiGithub  className='text-3xl hover:text-secondaryfirst'/></a>
                </div>
            </div>
            <div className="hero-image">
                <img src={polygon} alt=""  className='w[500px]'/>
            </div>
            </section>
            {/* <ModalComponent/> */}
        </>
    );
}

export default HeroComponent;