import React from 'react';
import styles from './page.module.css';
import { BiSearch } from 'react-icons/bi'; 

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
                <BiSearch className={styles.searchicon} size={22} />
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        </div>
    );
};

export default Search;
