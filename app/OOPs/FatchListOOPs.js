import Link from "next/link";

async function getOOPsQuestions() {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/Getcollection/0/OOPs",{
        next:{
            revalidate: 30 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }
  
  export default async function FatchOOPsList() {
    const OOPsQ = await getOOPsQuestions();
  
    return (
      <>
        {OOPsQ["data"].map((OOPD) => (
          <Link href={`OOPs/${OOPD.QID}`} key={`OOPs/${OOPD.QID}`}>
          <div key={OOPD.QID} className="card my-5">
            <h3>Question: {OOPD.question}</h3>
            <p>Answere: {OOPD.expectedAnswer}</p>
            <div className={`pill Dart ${OOPD.difficulty}`}>{OOPD.difficulty}</div>
          </div>
          </Link>
        ))}
        {OOPsQ.length === 0 && <p className="text-center">There are no open tickets, yey!</p>}
      </>
    );
  }
  