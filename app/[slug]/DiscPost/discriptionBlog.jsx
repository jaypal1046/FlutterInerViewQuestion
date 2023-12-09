import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import CodeCard from "./CodeCard/CodeCard";
import { Style } from "./descPost.css";

function DiscBlog({ List, conType }) {
  return (
    <div className="BlogContainer">
      {List.map((items, index) => (
        <div className="dscPostStyle" key={`this${items}`}>
          {conType[index] === "Code" ? (
            <CodeCard key={items} code={items} language="dart" />
          ) : conType[index] === "ImageUrl" ? (
            <ImageCard key={items} image={items} />
          ) : (
            <div
              className="textCard "
              dangerouslySetInnerHTML={{ __html: items }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DiscBlog;
