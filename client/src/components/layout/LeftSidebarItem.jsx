import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const LeftSidebarItem = (props) => {

    const [drop, setDrop] = useState(props.subDropDown);
    const [show, setShow] = useState(false);

    return (
        <div>
            {drop ? (
                <div onClick={() => setShow(!show)} className='flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] pb-3'>
                    <h3 className='font-dm font-normal text-base text-[#767676]'>
                        {props.color && (
                            <span className='inline-block mr-2 h-[11px] w-[11px] rounded-full' style={{ background: props.color }}></span>
                        )}
                        {props.title}
                    </h3>
                    <AiOutlinePlus className='text-xs' />
                </div>
            ) : (
                <div className='flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] pb-3'>
                    <h3 className='font-dm font-normal text-base text-[#767676]'>
                        {props.color && (
                            <span className='inline-block mr-2 h-[11px] w-[11px] rounded-full' style={{ background: props.color }}></span>
                        )}
                        {props.title}
                    </h3>
                </div>
            )}


            {
                show && (
                    <div>
                        {props.children}
                    </div>
                )
            }
        </div>
    )
}

export default LeftSidebarItem;