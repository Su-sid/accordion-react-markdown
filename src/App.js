import { Accordion, AccordionTab } from 'primereact/accordion';
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import React from 'react';

export default function App() {
  return (
    <div className="App">
     <Accordion>
      <AccordionTab header="Header I">
        <PageComponent/>
      </AccordionTab>
      </Accordion>
    </div>
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