async function getDartDoc(id) {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/apiGetDart/"+id,{
        next:{
            revalidate: 60 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }

export default async function FlutterQuestion({params}) {


    const flutterQ = await getDartDoc(params.id);

  return (
    <main>
    
        <div key={`${flutterQ["data"].question}`} className="card my-5">
            <h3>Question: {flutterQ["data"].question}</h3>
            <p>Amswere: {flutterQ["data"].expectedanswer}</p>

            <h3>Followup Question: {flutterQ["data"].followUpQuestion}</h3>
            <p>Followup Question Answere: {flutterQ["data"].followUpQuestionAnswere}</p>
            <div className={`pill ${flutterQ["data"].difficulty}`}>{flutterQ["data"].difficulty}</div>
          </div>
          </main>
            
      
   
  )
}
