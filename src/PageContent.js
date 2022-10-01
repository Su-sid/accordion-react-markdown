import React from 'react'
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function PageContent() {

   const [content, setContent] = useState("");

    useEffect(() => {
      fetch("App.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);

  return (
    <div>

      <ReactMarkdown children={content}></ReactMarkdown>
      
    </div>
  )
}

