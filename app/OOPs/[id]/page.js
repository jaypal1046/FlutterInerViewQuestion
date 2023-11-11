async function getOOPsDoc(id) {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/apiGetOOPs/"+id,{
        next:{
            revalidate: 60 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }

export default async function OOPsQuestion({params}) {


    const flutterQ = await getOOPsDoc(params.id);

  return (
    <main>
    
        <div key={`${flutterQ["data"].question}`} className="card my-5">
            <h3>Question: {flutterQ["data"].question}</h3>
            <p>Amswere: {flutterQ["data"].expectedAnswer}</p>

            {/* <h3>Followup Question: {flutterQ["data"].followUpQuestion}</h3>
            <p>Followup Question Answere: {flutterQ["data"].followUpQuestionAnswere}</p> */}
            <div className={`pill ${flutterQ["data"].difficulty}`}>{flutterQ["data"].difficulty}</div>
          </div>
          </main>
            
      
   
  )
}
