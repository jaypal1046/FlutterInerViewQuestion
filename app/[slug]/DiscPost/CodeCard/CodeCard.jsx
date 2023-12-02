import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeCard({ code, language, key}) {
 


  return (
    <div className="codeApp" key={key}>
         
          <div className='codeApp' dangerouslySetInnerHTML={{ __html: code }}></div>
          
        
      
    </div>
  );
} 

export default CodeCard
