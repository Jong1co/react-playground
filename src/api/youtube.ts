import { AxiosResponse } from "axios";
import { YoutubeClient } from "./youtubeClient";

export interface Youtube {
  // search: (keyword: string) => Promise<AxiosResponse>;
}

type YoutubeVideoData = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    title: string;
    publishTime: Date;
    thumbnails: {
      default: Thumbnail;
      high: Thumbnail;
      medium: Thumbnail;
    };
  };
};

export type YoutubeVideoListData = {
  data: {
    etag: string;
    items: YoutubeVideoData[];
    kind: string;
    nextPageToken: string;
    regionCode: string;
  };
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

// type Keyword = string | null;

export default class YoutubeImpl {
  private apiClient;
  constructor(apiClient: YoutubeClient) {
    this.apiClient = apiClient;
  }

  async search(keyword: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  private async mostPopular() {
    return this.apiClient.videos({
      params: {
        part: "snippet",
        maxResults: 25,
        chart: "mostPopular",
      },
    });
  }

  private async searchByKeyword(keyword: string) {
    return this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: keyword,
      },
    });
  }
}
