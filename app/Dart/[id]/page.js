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

  async function getOption(id) {
    const res = await fetch(
      `https://www.nseindia.com/api/option-chain-indices?symbol=${id}`
    );
    return res.json();
  }

export default async function FlutterQuestion({params}) {


    const flutterQ = await getDartDoc(params.id);
    const options = await getOption("NIFTY");
  return (
    <main>
    
        <div key={`${flutterQ["data"].question}`} className="card my-5">
            <h3>Question: {flutterQ["data"].question}</h3>
            <p>Amswere: {flutterQ["data"].expectedanswer}</p>

            <h3>Followup Question: {flutterQ["data"].followUpQuestion}</h3>
            <p>Followup Question Answere: {flutterQ["data"].followUpQuestionAnswere}</p>
            <div className={`pill ${flutterQ["data"].difficulty}`}>{flutterQ["data"].difficulty}</div>
          </div>
          <div>
          {options["records"]["data"].map((option) => {
            if (option.CE === undefined || option.PE === undefined) {
              return <div key={`key-${option.strikePrice}`}></div>;
            } else {
              if (
                options["records"]["expiryDates"][0] == option.expiryDate &&
                !(
                  option.strikePrice + 500 <= option.CE.underlyingValue ||
                  option.strikePrice - 500 >= option.CE.underlyingValue
                )
              ) {
                return <p key={`key-list-${option.strikePrice}`}>{option.strikePrice}</p>;
              }
            }
          })}
        </div>
          </main>
            
      
   
  )
}
