import React from 'react'
import arrowright from './../asset/icon/arrowright.svg';
import arrowleft from './../asset/icon/arrowleft.svg';

function FeaturedProjectComponent() {
    return (
        <section className='m-auto w-[80%] py-14' id="project">
            <h3 className='text-center text-2xl font-bold py-12 font-russo'>Featured Project</h3>
            <div className='flex justify-between items-center font-revalia'>
                <img src={arrowleft} alt="" />
                <div className='flex border w-[60rem]'>
                    <div className='flex gap-8 items-center'>
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/EeuTB2IIeP8?si=MrXjhWRUeBCWRw-y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-[100%]'></iframe>
                        <div className=''>
                            <h4 className='text-xl font-medium text-primary'>School Website</h4>
                            <p>Website adaptable to all devices with UI component and animated interactions.</p>
                            <div className='flex gap-4 py-4 font-redrose'>
                                <button type="button" className='px-2 py-1 bg-primary rounded-md text-white text-xs'>View Code</button>
                                <button type="button" className='px-2 py-1 bg-primary rounded-md text-white text-xs'>Live Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={arrowright} alt="" />
            </div>
        </section>
    );
}

export default FeaturedProjectComponent;