import React from 'react'

const HeaderComponent = () => {
    return (
        <header className='flex justify-between items-center m-auto w-[80%] py-8'>
            <h2 className='text-2xl font-russo bg-clip-text text-transparent bg-gradient-to-r from-secondaryfirst to-secondary'>Aacraj.tech</h2>
            <nav className='flex gap-16 items-center'>
                <ul className='flex gap-8 items-center font-revalia text-xs font-medium'>
                    <li className='hover:border-b-2 border-primary pb-1'><a href="##">Home</a></li>
                    <li className='hover:border-b-2 border-primary pb-1 transition-all'><a href="#about">About</a></li>
                    <li className='hover:border-b-2 border-primary pb-1 transition-all'><a href="#service">Service</a></li>
                    <li className='hover:border-b-2 border-primary pb-1 transition-all'><a href="#skill">Skill</a></li>
                    <li className='hover:border-b-2 border-primary pb-1 transition-all'><a href="#project">Portfolio</a></li>
                    <li className='hover:border-b-2 border-primary pb-1 transition-all'><a href="#pricing">Pricing</a></li>
                </ul>
                <button type="button" className='px-6 py-2 bg-primary rounded-md font-redrose text-white hover:bg-secondaryfirst'><a href="#contact">Contact Me</a></button>
            </nav>
        </header>
    );
}

export default HeaderComponent;