import { Style } from "./Single.css";
import Logo from "./p1.png";
import Image from "next/image";

function SinglePage() {
  return (
    <main>
      <div className="DConatinet">
        <div className="infoContainer">
          <div className="textConatiner">
            <h1 className="dtitle">Loram ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className="user">
              <div className="userImageContainer">
                <Image src={Logo} alt="avater" fill className="avatar" />
              </div>
              <div className="userTextContainer">
                <span className="userName">Jay Pal</span>
                <span className="date"> 01 Dec 2023</span>
              </div>
            </div>
          </div>
          <div className="imageContainer">
            <Image src={Logo} fill className="postImage" alt="Post Name" />
          </div>
        </div>
        <div className="dcontent">
            < div className="dpost">
                <div className="ddescription"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat suscipit doloremque voluptatem, iure explicabo, quod maxime facilis, ipsa minus! Officiis illum dolorum laborum harum. Possimus laborum qui molestiae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quo vel cum. Vel numquam reprehenderit in debitis ipsa hic ipsam illo sequi? Ab, rerum sunt. Quibusdam quo officiis assumenda suscipit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat suscipit doloremque voluptatem, iure explicabo, quod maxime facilis, ipsa minus! Officiis illum dolorum laborum harum. Possimus laborum qui molestiae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quo vel cum. Vel numquam reprehenderit in debitis ipsa hic ipsam illo sequi? Ab, rerum sunt. Quibusdam quo officiis assumenda suscipit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat suscipit doloremque voluptatem, iure explicabo, quod maxime facilis, ipsa minus! Officiis illum dolorum laborum harum. Possimus laborum qui molestiae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quo vel cum. Vel numquam reprehenderit in debitis ipsa hic ipsam illo sequi? Ab, rerum sunt. Quibusdam quo officiis assumenda suscipit.</p>
                
            </div>
        </div>
      </div>
    </main>
  );
}

export default SinglePage;
