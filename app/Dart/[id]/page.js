async function getDartDoc(id) {
    const res = await fetch("https://jaypal1046.pythonanywhere.com/apiGetDart/"+id,{
        next:{
            revalidate: 60 //use 30 to opt  out of using catch
        }
    });
    return res.json();
  }

  export async function generateMetadata({ params }) {
    try {
      const flutterQ = await getDartDoc(params.id);
      if (!flutterQ) {
        return {
          title: "Not-Found",
          description: "This which your are loking dosent exist",
        };
      }
  
      return {
        title: flutterQ["data"].question,
        description: flutterQ["data"].expectedanswer,
        alternates: {
          canonical: `/Dart/${params.id}`,
        },
        twitter: {
          card: "summary_large_image",
          title: flutterQ["data"].question,
          description: flutterQ["data"].expectedanswer,
          siteId: "1467726470533754880",
          creator: "@FlutterQ26361",
          creatorId: "1467726470533754880",
          images: ["https://nestjs.org/og.png"],
        },
      };
    } catch (error) {
      return {
        title: "Not-Found",
        description: "This which your are loking dosent exist",
      };
    }
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
