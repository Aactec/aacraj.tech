import React from 'react'
import arrowright from './../asset/icon/arrowright.svg';
import arrowleft from './../asset/icon/arrowleft.svg';

function FeaturedProjectComponent() {
    return (
        <section className='m-auto w-[90%] py-14' id="project">
            <h3 className='text-center text-2xl font-bold py-12 font-russo'>Featured Project</h3>
            <div className='flex justify-between items-center font-revalia'>
                {/* <img src={arrowleft} alt="" /> */}
                    <div className='flex flex-col gap-8 items-center'>
                    <iframe max-width="360" height="360" src="https://aactec.github.io/Flourish/" className='w-[100%] bg-white'></iframe>
                        <div className=''>
                            <h4 className='text-xl font-medium text-primary'>School Website</h4>
                            <p>Website adaptable to all devices with UI component and animated interactions.</p>
                            <div className='flex gap-4 py-4 font-redrose'>
                                <button type="button" className='px-2 py-1 bg-primary rounded-md text-white text-xs'>View Code</button>
                                <button type="button" className='px-2 py-1 bg-primary rounded-md text-white text-xs'>Live Demo</button>
                            </div>
                        </div>
                    </div>
                {/* <img src={arrowright} alt="" /> */}
            </div>
        </section>
    );
}

export default FeaturedProjectComponent;