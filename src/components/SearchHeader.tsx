import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../_common/components/Input";
import { css } from "@emotion/css";

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
        <Input
          placeholder='플레이스홀더'
          value={text}
          onChange={(e) => {
            console.log(typeof (e.target as HTMLInputElement).value);

            setText((e.target as HTMLInputElement).value);
          }}
          borderRadius={10}
          border='3px solid pink'
          paddingLeft={10}
          className={css`
            width: 100px;
            height: 500px;
          `}
        />
        <button>검색하기</button>
      </form>
    </header>
  );
};

export default SearchHeader;
