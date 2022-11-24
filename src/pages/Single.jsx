import React from "react";
import { Link } from "react-router-dom";
import Edit from "../imgs/edit.png";
import Delete from "../imgs/trash.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://1.bp.blogspot.com/-y30Tj2wGlxk/X8PWlVe7OfI/AAAAAAAAA0Y/jOANBLZzkC8e7dZ7xJofiW_Bq7f_MwwCQCLcBGAsYHQ/s626/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://yt3.ggpht.com/a/AATXAJxQKukYxK9pjbXPUrzEChNRF-ZVVPQd-4zg2Q=s900-c-k-c0xffffffff-no-rj-mo"
            alt=""
          />
          <div className="info">
            <span>Boby</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni
          cupiditate odit est. Eaque facere voluptates, et consectetur molestias
          dolores libero eos officiis cumque delectus suscipit voluptatibus in
          explicabo deserunt quos ex obcaecati quibusdam magnam amet provident,
          ea eveniet corrupti. Non quos quo aliquam magnam cupiditate quisquam
          necessitatibus blanditiis ullam inventore neque, cum voluptatem
          accusantium asperiores est voluptatibus incidunt. Corporis assumenda
          quia debitis alias temporibus, explicabo rem obcaecati dicta sed,
          deserunt laudantium ex fugiat provident vel quisquam optio quas sunt
          doloremque! Nemo consequuntur quam neque deleniti repellendus quo
          minima fugit doloremque libero harum ducimus quasi mollitia
          accusantium commodi, fuga quisquam vitae praesentium? Non quisquam
          similique voluptatibus, voluptate nam porro autem ex qui minus quia ad
          eius sit fugiat beatae modi libero error eveniet doloremque dolores
          quidem mollitia voluptates necessitatibus. Facilis reprehenderit
          eaque, cupiditate eveniet id cumque amet vero officia soluta, ut
          ducimus aliquam sint quasi repudiandae aut inventore perspiciatis
          illo!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
