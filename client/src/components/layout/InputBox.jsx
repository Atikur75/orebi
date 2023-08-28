import React from 'react';

const InputBox = (props) => {
    return (
        <>
            <div className='mt-10 mb-3'>
                <h3 className='font-dm font-bold text-secondary text-base'>{props.title}</h3>
                <props.as placeholder={props.placeholder} className='w-[780px] py-5 outline-0 border-b border-solid border-[#F0F0F0] placeholder:font-dm placeholder:text-normal placeholder:text-sm placeholder:text-[#767676]' />
            </div>
        </>
    )
}

export default InputBox;