import BlogCardList from "./BlogCardList/BlogCardList";
import CategoryList from "../CategoryList/CategoryList";
import { Style } from "./blog.css";

export const metadata = {
  title: "Blog - Flutter Interview Question",
  description:
    "FIVQ blog is section where you will get blog related to Flutter | Dart | Style | Culture | Travel | Food | Fashion ",
};

async function blog() {
  return (
    <main>
      <div className="bConatiner">
        <CategoryList />
        {/* <h1 className={`bTitle ${cat||"Coding"}`}>{cat||"Coding"} Blog</h1> */}
        <div className="bcontent">
          <BlogCardList />
        </div>
      </div>
    </main>
  );
}

export default blog;
