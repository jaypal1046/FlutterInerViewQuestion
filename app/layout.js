import { Rubik } from 'next/font/google'
import './globals.css'
import './header.css'
//Component
import NavCom from './NavCom/NavCom'
import Footer from './Footer/Footer'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://flutterinerviewquestion.com"),
  
  title: 'Flutter Interview Question',
  description: 'Top Interview Question for flutter, Dart, OOPs and blog',
  varification:{
      google:"google-site-verification=jCokbqF0o_f1MtlXM6wX2KJub9R303kVUjU-gApIYmQ",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="jCokbqF0o_f1MtlXM6wX2KJub9R303kVUjU-gApIYmQ" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4632777473354952"
     crossorigin="anonymous"></script>
      </head>
      <body className={rubik.className}>
        <NavCom />
      
        {children}
        <Footer />
        </body>
    </html>
  )
}

