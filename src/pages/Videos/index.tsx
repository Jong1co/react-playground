import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { VideosList } from "./index.styles";

const Videos = () => {
  const { keyword } = useParams();
  const youtube = useYoutubeApi();

  const { data: videos } = useQuery(["video", keyword], () => youtube?.search(keyword as string), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <VideosList>
      {videos?.data.items.map((video) => {
        return (
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt='' />
            <div>{video.snippet.title}</div>
          </li>
        );
      })}
    </VideosList>
  );
};

export default Videos;
