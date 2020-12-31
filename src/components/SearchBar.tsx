import "../css/search-bar.css";
import React, { useState } from "react";
import CloseButton from "./CloseButton";

export default function () {
  const [searchStr, setSearchStr] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  const handleInputEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("ENTER", e);
    }
  };

  const handleClickClose = () => {
    setSearchStr("");
  };

  return (
    <header className="SearchBar">
      <div className="SearchBar-wrapper">
        <input
          className="SearchInput"
          onChange={handleInputChange}
          onKeyDown={handleInputEnterKey}
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
