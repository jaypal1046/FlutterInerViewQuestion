
import FatchOOPsList from './FatchListOOPs'
import FatchMediamOOPsList from './FatchMediamOOPs'
import FatchAdvanceOOPsList from './FatchAdvanceOOPs'

export const metadata = {
  title: "OOPs Interview Question",
  description: "Best OOPs Question Answer with difficulty",
};

export default function Dart() {

    return (
      <main>
       <nav>
        <div>
            <h2>OOPs Interview Question</h2>
            <p><small>Best OOPs Question with difficulty</small></p>
        </div>
       </nav>
       <FatchOOPsList />
       <FatchMediamOOPsList/>
       <FatchAdvanceOOPsList />
      </main>
    )
  }