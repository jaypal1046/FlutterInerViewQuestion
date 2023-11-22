import { Style } from "./Single.css";
import DiscBlog from "./DiscPost/discriptionBlog"

import Image from "next/image";
async function getPostByUrl(id) {
  const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostByIdData/"+id,{
      next:{
          revalidate: 60 //use 30 to opt  out of using catch
      }
  });
  return res.json();
}

async function  SinglePage({params}) {
  const flutterQ = await getPostByUrl(params.slug);

  return (
    <>
   
    { 
    flutterQ["data"]!==null && <main>
      <div className="DConatinet">
        <div className="infoContainer">
          <div className="textConatiner">
            <h1 className="dtitle">{flutterQ["data"].title}</h1>
            <div className="user">
              <div className="userImageContainer">
                <Image src={flutterQ["data"].avatar} alt="avater" fill className="avatar" />
              </div>
              <div className="userTextContainer">
                <span className="userName">{flutterQ["data"].avatarName}</span>
                <span className="date">{flutterQ["data"].date.substring(4,16)}</span>
              </div>
            </div>
          </div>
          <div className="imageContainer">
            <Image src={flutterQ["data"].url} fill className="postImage" alt="Post Name" />
          </div>
        </div>
        <div className="dcontent">
            < div className="dpost">
                <div className="ddescription"></div>
                <DiscBlog List={flutterQ["data"].content}/>

                <p>{flutterQ["data"].subTitle}</p>
                
            </div>
        </div>
      </div>
    </main>}
    
    {flutterQ["data"] === null && <p className="text-center">There are no Blog available on this topic!</p>}
  </>



   
  );
}

export default SinglePage;
