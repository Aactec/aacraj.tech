import React from 'react'
import code from './../asset/icon/code.svg';
import design from './../asset/icon/design.svg';
import git from './../asset/icon/git.svg';

const ServiceComponent = () => {
    return (
        <section className='m-auto w-[80%] py-14' id="service">
            <h3 className='text-center text-2xl font-bold py-12 font-russo'>Services Offered</h3>
            <div className='flex justify-between gap-4 font-revalia'>
                <div className='bg-white p-6 rounded-md'>
                    <img src={code} alt="" />
                    <h4 className='text-xl font-medium py-2'>Frontend Development</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est optio tempore repellendus totam quidem ratione excepturi quo accusamus rem?</p>
                </div>
                <div className='bg-white p-6 w-62 rounded-md'>
                    <img src={design} alt="" />
                    <h4 className='text-xl font-medium py-2'>Responsive Web Design</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est optio tempore repellendus totam quidem ratione excepturi quo accusamus rem?</p>
                </div>
                <div className='bg-white p-6 w-62 rounded-md'>
                    <img src={git} alt="" />
                    <h4 className='text-xl font-medium py-2'>Git Version Control</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est optio tempore repellendus totam quidem ratione excepturi quo accusamus rem?</p>
                </div>
            </div>
        </section>
    );
}

export default ServiceComponent;