import Link from "next/link";

async function getOOPsAdv() {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/Getcollection/2/OOPs",{
        next:{
            revalidate: 30 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }
  
  export default async function FatchAdvanceOOPsList() {
    const OOPsQ = await getOOPsAdv();
  
    return (
      <>
        {OOPsQ["data"].map((OOPD) => (
          <Link href={`OOPs/${OOPD.QID}`} key={`OOPs/${OOPD.QID}`}>
          <div key={`OOPs ${OOPD.QID}`} className="card my-5">
            <h3>Question: {OOPD.question}</h3>
            <p>Answere: {OOPD.expectedAnswer}</p>
            <div className={`pill OOPs Advance ${OOPD.difficulty}`}>{OOPD.difficulty}</div>
          </div>
          </Link>
        ))}
        {OOPsQ.length === 0 && <p className="text-center">There are no open tickets, yey!</p>}
      </>
    );
  }
  