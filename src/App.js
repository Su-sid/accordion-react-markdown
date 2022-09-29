import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  return (
    <div className="App">
     <PageComponent /></div>
  
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("App.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
