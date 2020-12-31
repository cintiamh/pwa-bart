import "../css/search-bar.css";
import React, { useState } from "react";
import CloseButton from "./CloseButton";

type Props = {
  onEnterSearch?: (searchStr: string) => void;
};

export default function SearchBar({ onEnterSearch }: Props) {
  const [searchStr, setSearchStr] = useState("");

  const updateSearchStr = (value: string) => {
    setSearchStr(value);
    if (onEnterSearch) {
      onEnterSearch(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchStr(e.target.value);
  };

  const handleClickClose = () => {
    updateSearchStr("");
  };

  return (
    <header className="SearchBar">
      <div className="SearchBar-wrapper">
        <input
          className="SearchInput"
          onChange={handleInputChange}
          placeholder="Search stations"
          type="text"
          value={searchStr}
        />
        <CloseButton onClick={handleClickClose} />
      </div>
    </header>
  );
}

// TODO: Store 5 most recent searches to show in suggestions
