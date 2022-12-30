import React, { createContext, useContext } from "react";
import { YoutubeClientImpl } from "../api/youtubeClient";
import YoutubeImpl, { Youtube } from "../api/youtube";

export const YoutubeApiContext = createContext<YoutubeImpl | null>(null);

const client = new YoutubeClientImpl();
const youtube = new YoutubeImpl(client);

type YoutubeApiProviderProps = {
  children: React.ReactNode;
};

export function YoutubeApiProvider({ children }: YoutubeApiProviderProps) {
  return <YoutubeApiContext.Provider value={youtube}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
