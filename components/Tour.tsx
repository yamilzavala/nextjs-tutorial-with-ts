import { TTour } from '@/interfaces/interfaces';
import React from 'react';

const Tour = ({id, name, info, image, price}: TTour) => {
    return (
        <div>
            {id} - {name}
        </div>
    );
};

export default Tour;