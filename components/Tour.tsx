import { TTour } from '@/interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tour = ({id, name, info, image, price}: TTour) => {
    return (
        <div>
            <Link key={id} href={`/tours/${id}`} className="hover:text-blue-500">
                <div className='relative h-48'>
                    <Image alt="responsive image" priority src={image} fill sizes='33vw' className="object-cover rounded"/>
                </div>
                <h2>{name}</h2> 
            </Link>
        </div>
    );
};

export default Tour;