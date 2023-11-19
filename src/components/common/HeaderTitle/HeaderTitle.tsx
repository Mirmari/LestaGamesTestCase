import React from 'react';
import './style.scss'

interface PropsType {
    title: string;
}
const HeaderTitle: React.FC<PropsType> = ({title}) => {
    return (
        <div className="header-container" data-testid="header-container">
            <h1>{title}</h1>
        </div>
    );
};

export default HeaderTitle;