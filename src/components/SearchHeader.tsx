import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SearchHeader = () => {
  return (
    <header>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input type='text' placeholder='search..' />
        <button>검색하기</button>
      </form>
    </header>
  );
};

export default SearchHeader;
