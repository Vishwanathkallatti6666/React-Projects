import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

import { AppContext } from "./context/contextApi";
import LeftNav from "./components/LeftNav";
import VideoCard from "./components/VideoCard";

export default function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <LeftNav />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/SearchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}
