import React from 'react'
import calender from './../asset/icon/calender.svg';
import file from './../asset/icon/file.svg';
import hourly from './../asset/icon/hourglass.svg';

function PricingTableComponent() {
    return (
        <section className='m-auto w-[90%] py-14' id="pricing">
            <h3 className='text-center text-xl font-bold py-12 font-russo'>Pricing Table</h3>
            <div className='flex flex-col font-revalia gap-4 text-center'>
                <div className='bg-white p-6 w-53 rounded-md'>
                    <div className='flex gap-4 items-center pb-3 justify-center'>
                    <img className='' src={calender} alt="" />
                    <h3 className='font-semibold'>Full-time Job</h3>
                    </div>
                    <p>I'm available for full-time paid projects</p>
                    <div className='flex justify-center gap-12 items-center pt-4'>
                    <h2 className='text-2xl'>$2,000</h2>
                    <button type="button" className='py-1 px-3 bg-primary rounded-md font-redrose text-white text-sm hover:bg-secondaryfirst'>Hire Me</button>
                    </div>
                </div>
                <div className='bg-white p-6 w-53 rounded-md'>
                    <div className='flex gap-4 items-center pb-3 justify-center'>
                    <img src={file} alt="" />
                    <h3 className='font-semibold'>Part-time Job</h3>
                    </div>
                    <p>I'm available for part-time paid projects</p>
                    <div className='flex justify-center gap-12 items-center pt-4'>
                    <h2 className='text-2xl'>$500</h2>
                    <button type="button" className='py-1 px-3 bg-primary rounded-md font-redrose text-white text-sm hover:bg-secondaryfirst'>Hire Me</button>
                    </div>
                </div>
                <div className='bg-white p-6 w-53 rounded-md'>
                    <div className='flex gap-4 items-center pb-3 justify-center'>
                    <img src={hourly} alt="" />
                    <h3 className='font-semibold'>Hourly Job</h3>
                    </div>
                    <p>I'm available for hourly paid projects</p>
                    <div className='flex justify-center gap-12 items-center pt-4'>
                    <h2 className='text-2xl'>$100</h2>
                    <button type="button" className='py-1 px-3 bg-primary rounded-md font-redrose text-white text-sm hover:bg-secondaryfirst'>Hire Me</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingTableComponent;