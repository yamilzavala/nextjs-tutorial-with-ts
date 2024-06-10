import { links } from '@/data/data';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='max-w-3xl mx-auto py-4 flex gap-x-4'>          
            {links.map((item,idx) => {
                const {link, text} = item;
                return (                   
                    <Link key={idx} href={link}>
                        {text}
                    </Link>                  
                )
            })}
         
        </nav>
    );
};

export default Navbar;