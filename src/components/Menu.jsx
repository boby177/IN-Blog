import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
  //     img: "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
  //     img: "https://media.istockphoto.com/id/169940960/photo/asian-elephant.jpg?s=612x612&w=0&k=20&c=QblEPpog7qLeBjzrvAUNweJUEvUo0Z3KKK3MUBa8Bkw=",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero consequatur distinctio sunt aut hic asperiores harum quisquam qui reiciendis!",
  //     img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
