import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('Reviews');
    return (
        <div>
            <h2 className='text-xl'>You have {} reviews</h2>
        </div>
    );
};

export default MyReview;