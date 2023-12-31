import React, {ChangeEvent} from 'react';
import './style.scss'

interface PropsType {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: (value: string) => void;
}

const SearchBlock: React.FC<PropsType> = ({onSearch, value, onChange}) => {
    return (
        <div className="search-container" data-testid="search-container">
            <div className="search-inner">
                <input className="input-search" data-testid="input-search" type="text" value={value} onChange={onChange}/>
                <button className="btn-search" data-testid="btn-search" onClick={() => onSearch(value)}>Search</button>
            </div>
        </div>
    );
};

export default SearchBlock;