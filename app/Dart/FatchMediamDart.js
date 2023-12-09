import Link from "next/link";

async function getTickets() {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/Getcollection/1/Dart",{
        next:{
            revalidate: 30 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }
  
  export default async function FatchMediamDartList() {
    const flutterQ = await getTickets();
  
    return (
      <>
        {flutterQ["data"].map((flutters) => (
          <Link href={`dart/${flutters.QID}`} key={`Dart/${flutters.QID}`}>
          <div key={`Dart Mediam ${flutters.QID}`} className="card my-5">
            <h3>Question: {flutters.question}</h3>
            <p>Amswere: {flutters.expectedanswer}</p>
            <div className={`pill Dart Mediam ${flutters.difficulty}`}>{flutters.difficulty}</div>
          </div>
          </Link>
        ))}
        {flutterQ.length === 0 && <p className="text-center">There are no open tickets, yey!</p>}
      </>
    );
  }
  