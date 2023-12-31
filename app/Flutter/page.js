import FatchList from "./FatchList";
import FatchMediamList from "./FatchMediam";
import FatchAdvanceList from "./FatchAdvance";
export const metadata = {
  title: "Flutter Interview Question",
  description: "Best Flutter Question Answer with difficulty",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Flutter Interview Question</h2>
          <p>
            <small>Best Flutter Question with difficulty</small>
          </p>
        </div>
      </nav>
      <FatchList />
      <FatchMediamList />
      <FatchAdvanceList />
    </main>
  );
}
