import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'; 
import s from './SearchBox.module.css';

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        Find contacts by name
        <input
          className={s.searchInput}
          type="text"
          value={value}
          onChange={handleSearchChange} 
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchBox;
