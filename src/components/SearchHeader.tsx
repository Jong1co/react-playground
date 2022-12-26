import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchHeader = () => {
  const { keyword } = useParams();

  const navigator = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(keyword ? keyword : "");
  }, [keyword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigator(`/videos/${text}`);
  };

  return (
    <header>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search..'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>검색하기</button>
      </form>
    </header>
  );
};

export default SearchHeader;
