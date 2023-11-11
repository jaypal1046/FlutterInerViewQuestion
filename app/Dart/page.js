
import FatchDartList from './FatchListDart'
import FatchMediamDartList from './FatchMediamDart'
import FatchAdvanceDartList from './FatchAdvanceDart'

export default function Dart() {

    return (
      <main>
       <nav>
        <div>
            <h2>Dart Interview Question</h2>
            <p><small>Best Dart Question with difficulty</small></p>
        </div>
       </nav>
       <FatchDartList />
       <FatchMediamDartList/>
       <FatchAdvanceDartList />
      </main>
    )
  }