import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { YoutubeVideoListData } from "../api/youtube";
import { useEffect } from "react";

const Videos = () => {
  const { keyword } = useParams();
  const youtube = useYoutubeApi();

  const { data: videos } = useQuery(["video", keyword], () => youtube?.search(keyword as string), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  console.log(videos?.data.items);

  return (
    <div>
      {videos?.data.items.map((video) => {
        return (
          <div key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt='' />
            {video.snippet.title}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
