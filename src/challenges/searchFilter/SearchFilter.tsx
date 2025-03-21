import React, { useState } from "react";
import styles from "./SearchFilter.module.css";
export default function SearchFilter() {
  const avengers = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Doctor Strange",
    "Spider-Man",
    "Black Panther",
    "Scarlet Witch",
    "Ant-Man",
    "Wasp",
    "Falcon",
    "Winter Soldier",
    "Captain Marvel"
  ];
  
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = avengers.filter((avenger) =>
    avenger.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className={styles.input}
      />

      <ul className={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))
        ) : (
          <li className={styles.noResults}>No Results found</li>
        )}
      </ul>
    </div>
  );
}
