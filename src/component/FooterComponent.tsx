import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

function FooterComponent() {
    return (
        <footer className='m-auto w-[80%] pt-14 font-revalia'>
            <div className='flex justify-between items-end py-12 border-t border-t-primary'>
                <div className=''>
                    <h2 className='font-russo text-2xl bg-clip-text text-transparent bg-gradient-to-r from-secondaryfirst to-secondary'>Aacraj.Tech</h2>
                    <p>Frontend Developer</p>
                </div>
                <div>
                    <h3 className='pb-2 text-secondary'>Developer Base:</h3>
                <div className='flex gap-12'>
                    <a href="https://www.linkedin.com/in/aacraj-tech"><SiLinkedin  className='text-2xl hover:text-secondary'/></a>
                    <a href="https://twitter.com/Aacraj_tech"><RiTwitterXFill  className='text-2xl hover:text-secondary'/></a>
                    <a href="https://github.com/Aactec"><FaGithubSquare  className='text-2xl hover:text-secondary'/></a>
                </div>
                </div>
                <div>
                    <h3 className='pb-2 text-secondary'>Social Base:</h3>
                <div className='flex gap-8'>
                    <a href="https://www.instagram.com/aacraj_tech"><AiFillInstagram className='text-2xl hover:text-secondary' /></a>
                    <a href="https://www.facebook.com/Aacajitech2024"><FaFacebookSquare className='text-2xl hover:text-secondary' /></a>
                    <a href="http://wa.me/2349167211748?text=hello"><BiLogoWhatsappSquare className='text-2xl hover:text-secondary' /></a>
                </div>
                </div>
            </div>
            <div className='text-center border-t border-t-primary py-6'><h3>Copyright &copy; aacraj.tech All rights reserved</h3></div>
        </footer>
    );
}

export default FooterComponent;