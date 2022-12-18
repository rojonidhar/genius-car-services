import React from 'react';
import notFoundPage from '../../../../images/404.jpg';
const NotFoundPage = () => {
    return (
        <div>
            <h2 className='text-center fs-2 fw-bolder opacity-75'>Sorry!!Chief is sleeping</h2>
            <img className=' w-100' src={notFoundPage} alt=""/>
        </div>
    );
};

export default NotFoundPage;