import { useId } from "react";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterValue, setFilterValue } from "../../redux/filtersSlice";
const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(filterValue);
  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
  };

  return (
    <div className={styles.searchCard}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        id={searchInputId}
        value={filterName}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
