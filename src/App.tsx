import React from "react";
import "./App.css";
import Videos from "./pages/Videos";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Videos />
      </QueryClientProvider>
    </div>
  );
}

export default App;
