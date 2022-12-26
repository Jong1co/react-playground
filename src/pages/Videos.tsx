import React, { useEffect, useRef, useState } from "react";
import { YoutubeClientImpl } from "../api/youtubeClient";
import YoutubeImpl from "../api/youtube";
import { useQuery } from "@tanstack/react-query";

const Videos = () => {
  const youtube = new YoutubeImpl(new YoutubeClientImpl());
  const [keyword, setKeyword] = useState("");
  const search = useRef(null);

  const { data: videos } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  console.log(videos);

  return (
    <div>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          if (search.current != null) {
            setKeyword((search.current as HTMLInputElement).value);
          }
        }}>
        <input type='text' ref={search} />
      </form>
    </div>
  );
};

export default Videos;
