import React from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span
            className="z-50 absolute top-[153px] left-0 !flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
            style={{ ...style }}
            onClick={onClick}
        >
            <FaLongArrowAltLeft className='text-base text-white' />
        </span>
    );
}

export default SamplePrevArrow;