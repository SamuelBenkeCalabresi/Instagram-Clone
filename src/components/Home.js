import React, { useState, useEffect } from "react";
import { db } from "../api/firebase";
// Styles
import "../styles/Home.css";
// Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <div className="home__body">
          <main className="home__bodyPostContainer">
            {posts.map(({ id, username, postImageURL, description }) => (
              <Post
                id={id}
                username={username}
                postImageURL={postImageURL}
                description={description}
              />
            ))}
          </main>
          <Sidebar className="home__bodySidebar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
