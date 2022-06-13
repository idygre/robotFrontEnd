import React from "react";
import { posts } from "../data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="dashHeading">
        <h1>Dashboard</h1>
      </div>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
