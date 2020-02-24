import React from 'react';
import Aux from '../hoc/hoc';
import './style.scss';

const loader = (props) => {
    return (
        <Aux>
            <div className="Loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3 className="loading-info">{props.message}</h3>
        </Aux>
        
        )
}

export default loader;
