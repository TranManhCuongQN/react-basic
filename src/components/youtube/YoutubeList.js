import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log("children", props);
  const numbers = [1, 2, 3, 4, 5];
  const double = numbers.map((item) => item * 2);
  console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {props.children}
      {/* Lúc này trả về jsx html thôi nên dùng dấu ()  */}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default YoutubeList;
