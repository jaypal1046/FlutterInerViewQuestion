async function getTicket(id) {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/apiGetFlutter/"+id,{
        next:{
            revalidate: 60 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }

  // export const metadata = {
  //   title: 'Flutter Interview Question',
  //   description: flutterQ["data"].question,
  // }
export default async function FlutterQuestion({params}) {


    const flutterQ = await getTicket(params.id);
    
 

  return (
    <main>
    
        <div key={`${flutterQ["data"].question}`} className="card my-5">
            <h3>Question: {flutterQ["data"].question}</h3>
            <p>Amswere: {flutterQ["data"].answer}</p>

            <h3>Followup Question: {flutterQ["data"].followup_question}</h3>
            <p>Followup Question Answere: {flutterQ["data"].followup_question_answer   }</p>
            <div className={`pill ${flutterQ["data"].difficulty}`}>{flutterQ["data"].difficulty}</div>
          </div>
          </main>
            
      
      
   
  )
}
