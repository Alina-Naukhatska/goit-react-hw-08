import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={s.searchBox}>
            <label>
                Find contacts by name
                <input
                    className={s.searchInput}
                    type='text'
                    value={filter}
                    onChange={onFilterChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;