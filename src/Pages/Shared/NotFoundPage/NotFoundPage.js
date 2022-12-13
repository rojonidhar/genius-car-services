import React from 'react';
import notFoundPage from '../../../images/4o4.jpg';
const NotFoundPage = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>Machanic is sleeping</h2>
            <img className=' w-100' src={notFoundPage} alt=""/>
        </div>
    );
};

export default NotFoundPage;