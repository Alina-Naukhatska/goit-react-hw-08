import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilterValue } from '../../redux/filters/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);

    const handleChange = e => {
        dispatch(changeFilter(e.target.value.toLowerCase()));
    };

    return (
        <div className="flex flex-col gap-2 bg-gray-900 p-4 rounded-lg shadow-md border border-purple-500 w-[450px]">
            <label htmlFor="search" className="text-white">Find contacts by name or phone</label>
            <input id="search" name="search" type="text" value={filter} onChange={handleChange} className="input input-bordered bg-gray-800 text-white border-pink-400" autoComplete="off" />
        </div>
    );
};

export default SearchBox;