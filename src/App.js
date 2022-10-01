import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import React from 'react';
import PageContent from './PageContent';

export default function App() {
  return (

    <div className="accordion-demo">
     <Accordion>
      <AccordionTab header="Header I">
        <PageContent/>
      </AccordionTab>
      </Accordion>
    </div>
  );
}
