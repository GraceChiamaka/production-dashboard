import React from 'react';
import './style.scss';
const banner = (props) => {
    return setTimeout(() => {
        return (
            <div className="Banner">
                {props.children}
            </div>
        )
    }, 3000)
};
export default banner;
