import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { BsEnvelopeAtFill } from "react-icons/bs";

function ModalComponent() {
    return (
        <section className='box-border bg-modcol absolute'>
            <div className='border-secondaryfirst'>
                <h3>Hire Me</h3>
                <div className='flex justify-between items-center'>
                    <div className='grid gap-3'>
                        <div className='flex justify-between items-center'>
                            <MdLocationPin />
                            <div>
                                <h3>Location</h3>
                                <p>Oyo State, Nigeria</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <BsEnvelopeAtFill />
                            <div>
                                <h3>Email</h3>
                                <p>aacrajitech2024@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <input type="text" id="" placeholder="Company's / Individual Name"/>
                        <input type="Email" placeholder='Email'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea id="" cols={8} rows={4} placeholder='Purpose'></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModalComponent;