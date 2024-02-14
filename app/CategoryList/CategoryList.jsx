import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Styles } from "./CategoryStyle.css";

const getCategory = async () => {
  const res = await fetch(
    "https://jaypal1046.pythonanywhere.com/getHomeComData/ListOfCategory/Category",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Feaild to get Category");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getCategory();

  return (
    <div className="categoryContainer">
      <h1 className="categoryTitle">Popular Categories</h1>
      <div className="categoryCategories">
        {data["data"].map((item) => {})}

        {data["data"].map((flutters) => (
          <Link
            href={flutters["href"]}
            className={`categoryCategory ${flutters["Name"]}`}
            key={flutters["Name"]}
          >  
            <Image
              width={32}
              height={32}
              src={flutters["url"]}
              className="categoryImage"
              alt={flutters["Name"]}
            />
            {flutters["Name"]}
          </Link>
        ))}
        {data.length === 0 && (
          <p className="text-center">There are no open tickets, yey!</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
