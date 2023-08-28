import React from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span
            className="absolute top-[153px] right-1 !flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
            style={{ ...style }}
            onClick={onClick}
        >
            <FaLongArrowAltRight className='text-base text-white' />
        </span>
    );
}

export default SampleNextArrow;