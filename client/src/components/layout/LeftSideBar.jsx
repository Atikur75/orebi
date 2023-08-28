import React from 'react';
import SidebarContent from './SidebarContent';
import { category, colors, brands, price } from '../../data/data';

const LeftSideBar = () => {
    return (
        <div>
            <SidebarContent dropDown={true} title='Shop by Category' data={category} />
            <SidebarContent dropDown={false} title='Shop by Color' data={colors} />
            <SidebarContent dropDown={true} title='Shop by Brand' data={brands} />
            <SidebarContent dropDown={true} title='Shop by Price' data={price} />
        </div>
    )
}

export default LeftSideBar;