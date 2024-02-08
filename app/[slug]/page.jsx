import { Style } from "./Single.css";
import DiscBlog from "./DiscPost/discriptionBlog";

import Image from "next/image";
async function getPostByUrl(id) {
  const res = await fetch(
    "https://jaypal1046.pythonanywhere.com/getPostByIdData/" + id,
    {
      next: {
        revalidate: 60, //use 30 to opt  out of using catch
      },
    }
  );
  return res.json();
}

export async function generateMetadata({ params }) {
  try {
    const flutterQ = await getPostByUrl(params.slug);
    if (!flutterQ) {
      return {
        title: "Not-Found",
        description: "This which your are loking dosent exist",
      };
    }

    return {
      title: flutterQ["data"].title,
      description: flutterQ["data"].subTitle,
      alternates: {
        canonical: `/${params.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: flutterQ["data"].title,
        description: flutterQ["data"].subTitle,
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

async function SinglePage({ params }) {
  const flutterQ = await getPostByUrl(params.slug);

  return (
    <>
      {flutterQ["data"] !== null && (
        <main>
          <div className="DConatinet">
            <div className="infoContainer">
              <div className="textConatiner">
                <h1 className="dtitle">{flutterQ["data"].title}</h1>
                <div className="user">
                  <div className="userImageContainer">
                    <Image
                      src={flutterQ["data"].avatar}
                      alt="avater"
                      fill
                      className="avatar"
                    />
                  </div>
                  <div className="userTextContainer">
                    <span className="userName">
                      {flutterQ["data"].avatarName}
                    </span>
                    <span className="date">
                      {Date(flutterQ["data"]).toString().substring(4, 16)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="imageContainer">
                <img
                  src={flutterQ["data"].url}
              
                  className="postImage"
                  alt="Post Name"
                />
              </div>
            </div>
            <div className="dcontent">
              <div className="dpost">
                <p>{flutterQ["data"].subTitle}</p>
                <div className="ddescription">
                  <DiscBlog
                    List={flutterQ["data"].content}
                    conType={flutterQ["data"].contentType}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {flutterQ["data"] === null && (
        <p className="text-center">
          There are no Blog available on this topic!
        </p>
      )}
    </>
  );
}

export default SinglePage;
