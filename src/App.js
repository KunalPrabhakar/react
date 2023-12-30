import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SideBar } from "./components/sideBar";
import { CreatePost } from "./components/createPost";
import { Card } from "./components/card";
import PostList from "./components/postList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
