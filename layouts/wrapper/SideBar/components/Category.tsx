import Link from 'next/link'
import React from 'react'
import { navItems } from "../../../../helpers"
import { RouteLink } from '../../../../components'

export default function Category() {
    return (
        <div className='border-2 w-[95%] mt-5 border-[lightgray] shadow-lg'>
            <div className="title bg-black text-white p-3 border-2">
                <h3 className='font-[600] text-[16px] font-sans'>Category</h3>
            </div>
            <ul>
                {
                    navItems.map((item, index) => (
                        <RouteLink href={item.link} key={index}>
                            <li  className="flex justify-between items-center first:hidden p-3 border-b-[1px] border-[#bdbbbb]">
                                <a>{item.name}</a>
                                <span>
                                    {item.openIcon}
                                </span>
                            </li>
                        </RouteLink>
                    )
                    )
                }
            </ul>
        </div>
    )
}
