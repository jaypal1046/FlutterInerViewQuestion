
import BlogCardList from './BlogCardList/BlogCardList'
import {Style} from "./blog.css"




export async function generateMetadata({params}){
  try{
    const flutterQ = await getTopByCatPost(params.slug);
    if(!flutterQ){
      return {
        title:"Not-Found",
        description:"This which your are loking dosent exist"
        
      }

    }

    return {
      title: flutterQ["data"].title,
      description:flutterQ["data"].subTitle,
      alternates:{
        canonical: `/${params.slug}`

      },
      twitter:{
        card:"summary_large_image",
        title:flutterQ["data"].title,
        description:flutterQ["data"].subTitle,
        siteId:"1467726470533754880",
        creator:"@FlutterQ26361",
        creatorId:"1467726470533754880",
        images:["https://nestjs.org/og.png"]



      }
      
    }



  }catch(error){
    return {
      title:"Not-Found",
      description:"This which your are loking dosent exist"
      
    }

  }
}




async function blog({searchParams}) {

  const {cat}= searchParams||"Coding"


  return (
    <main>
       
      <div className='bConatiner'>
        <h1 className={`bTitle ${cat||"Coding"}`}>{cat||"Coding"} Blog</h1>
    <div className='bcontent'>

    

         <BlogCardList cat={cat||"Coding"}/>
      


    </div>
      
    </div>
    </main>
  )
}

export default blog
