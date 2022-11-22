import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
      img: "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
      img: "https://media.istockphoto.com/id/169940960/photo/asian-elephant.jpg?s=612x612&w=0&k=20&c=QblEPpog7qLeBjzrvAUNweJUEvUo0Z3KKK3MUBa8Bkw=",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
