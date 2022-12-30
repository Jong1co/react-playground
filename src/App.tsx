import React from "react";
import "./App.css";
import Videos from "./pages/Videos";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YoutubeApiProvider>
        <SearchHeader />
        <Outlet />
      </YoutubeApiProvider>
    </QueryClientProvider>
  );
}

export default App;
