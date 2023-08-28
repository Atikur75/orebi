import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import LeftSidebarItem from './LeftSidebarItem';
import { category } from '../../data/data';

const SidebarContent = ({ dropDown, title, data }) => {

    const [drop, setDrop] = useState(dropDown);
    const [show, setShow] = useState(dropDown);

    return (
        <div className='mb-14'>
            {drop ? (
                <div onClick={() => setShow(!show)} className='flex items-center justify-between cursor-pointer mb-7'>
                    <h3 className='font-dm font-bold text-base text-secondary'>{title}</h3>
                    <GoTriangleDown />
                </div>
            ) : (
                <div>
                    <h3 className='font-dm font-bold text-base text-secondary mb-7'>{title}</h3>
                </div >
            )}


            {
                show && (
                    <>
                        {data.map((item, index) => (
                            <div className='mb-5'>
                                {item.subcategory ?
                                    <LeftSidebarItem subDropDown={item.subcategory ? true : false} title={item.subcategory ? item.name : `Color ${index + 1}`} >
                                        {item.subcategory && item.subcategory.map((subitem) => (
                                            <p className='font-dm font-normal text-base text-[#767676] ml-3.5 border-b border-solid border-[#767676] pb-3 py-3'>{subitem.name}</p>
                                        ))}
                                    </LeftSidebarItem>
                                    :
                                    <LeftSidebarItem subDropDown={item.subcategory ? true : false} title={item.name} color={item.code}>
                                        {item.subcategory && item.subcategory.map((subitem) => (
                                            <p className='font-dm font-normal text-base text-[#767676] ml-3.5 border-b border-solid border-[#767676] pb-3 py-3'>{subitem.name}</p>
                                        ))}
                                    </LeftSidebarItem>}
                            </div>
                        ))}
                    </>
                )
            }

            {
                !drop && (
                    <>
                        {data.map((item, index) => (
                            <div className='mb-5'>
                                {item.subcategory ?
                                    <LeftSidebarItem subDropDown={item.subcategory ? true : false} title={item.name} color={item.name} >
                                        {item.subcategory && item.subcategory.map((subitem) => (
                                            <p className='font-dm font-normal text-base text-[#767676] ml-3.5 border-b border-solid border-[#767676] pb-3 py-3'>{subitem.name}</p>
                                        ))}
                                    </LeftSidebarItem>
                                    :
                                    <LeftSidebarItem subDropDown={item.subcategory ? true : false} title={item.name} color={item.code}>
                                        {item.subcategory && item.subcategory.map((subitem) => (
                                            <p className='font-dm font-normal text-base text-[#767676] ml-3.5 border-b border-solid border-[#767676] pb-3 py-3'>{subitem.name}</p>
                                        ))}
                                    </LeftSidebarItem>}
                            </div>
                        ))}


                    </>
                )
            }

        </div >
    )
}

export default SidebarContent;