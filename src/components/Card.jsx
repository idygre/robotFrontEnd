import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <ul className="ul">
        <li className="li"> {post.li1}</li>
        <li className="li"> {post.li2}</li>
        <li className="li"> {post.li3}</li>
        <li className="li"> {post.li4}</li>
      </ul>
    </div>
  );
};

export default Card;
