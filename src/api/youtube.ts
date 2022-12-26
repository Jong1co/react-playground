import { AxiosResponse } from "axios";
import { YoutubeClient } from "./youtubeClient";

interface Youtube {
  search: (keyword: string) => Promise<AxiosResponse>;
}

export default class YoutubeImpl implements Youtube {
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
