import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeCard({ code, language, key}) {
  const modifiedcode=code.replace("code001046://:", '');
  const codeString = "class MyApp extends StatelessWidget { const MyApp({super.key}); // This widget is the root of your application. @override Widget build(BuildContext context) { return MaterialApp( // Application name title: 'Stateful Widget', theme: ThemeData( primarySwatch: Colors.blue, ), // A widget that will be started on the application startup home: CounterWidget(), ); } }";

  return (
    <div className="App" key={key}>
      <SyntaxHighlighter language="c++" style={dark}>
        {modifiedcode}
      </SyntaxHighlighter>
    </div>
  );
} 

export default CodeCard
