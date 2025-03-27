import { useId } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  const searchFieldId = useId();

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={searchFieldId}
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;