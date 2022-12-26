import React, { useEffect } from "react";
import { YoutubeClientImpl } from "../api/youtubeClient";
import { useQuery } from "@tanstack/react-query";

const Videos = () => {
  // const youtube = new YoutubeClientImpl();

  // const { data } = useQuery(["query"], () =>
  //   youtube.search({
  //     params: {
  //       part: "snippet",
  //       maxResults: 25,
  //       type: "video",
  //       q: "핫소스",
  //     },
  //   })
  // );

  // console.log(data);

  return <div>gd</div>;
};

export default Videos;
