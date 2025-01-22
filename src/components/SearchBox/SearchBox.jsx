import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
    const filter = useSelector((state) => state.filters.name); 
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value)); 
    };

    return (
        <div className={s.searchBox}>
            <label>
                Find contacts by name
                <input
                    className={s.searchInput}
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;
