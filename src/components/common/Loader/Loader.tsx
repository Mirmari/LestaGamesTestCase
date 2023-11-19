import React from 'react';
import './style.scss'

const Loader = () => {
    return (
        <div className="loader" data-testid="loader">
            <span className="spinn"/>
        </div>
    );
};

export default Loader;