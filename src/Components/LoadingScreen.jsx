import React from 'react';

const LoadingScreen = () => {
    return (
        <div className='spinner-overlay'>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default LoadingScreen;