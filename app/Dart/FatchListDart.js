import Link from "next/link";

async function getDartQuestions() {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/Getcollection/0/Dart",{
        next:{
            revalidate: 30 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }
  
  export default async function FatchDartList() {
    const flutterQ = await getDartQuestions();
  
    return (
      <>
        {flutterQ["data"].map((flutters) => (
          <Link href={`Dart/${flutters.QID}`} key={`Dart/${flutters.QID}`}>
          <div key={flutters.QID} className="card my-5">
            <h3>Question: {flutters.question}</h3>
            <p>Amswere: {flutters.expectedanswer}</p>
            <div className={`pill Dart ${flutters.difficulty}`}>{flutters.difficulty}</div>
          </div>
          </Link>
        ))}
        {flutterQ.length === 0 && <p className="text-center">There are no open tickets, yey!</p>}
      </>
    );
  }
  