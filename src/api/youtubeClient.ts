import { YoutubeVideoListData } from "./youtube";
import axios from "axios";

type YoutubeParams = {
  params: {
    part: "snippet" | "id";
    id?: string;
    maxResults: number;
    type?: "video";
    q?: string;
    chart?: "mostPopular";
  };
};

export interface YoutubeClient {
  search: (params: YoutubeParams) => Promise<YoutubeVideoListData>;
  videos: (params: YoutubeParams) => Promise<YoutubeVideoListData>;
}

export class YoutubeClientImpl implements YoutubeClient {
  private httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: YoutubeParams) {
    return this.httpClient.get("/search", params);
  }

  async videos(params: YoutubeParams) {
    return this.httpClient.get("/videos", params);
  }

  async channels(params: YoutubeParams) {
    return this.httpClient.get("channels", params);
  }
}
