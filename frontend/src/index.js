import React from "react";
import { createRoot } from 'react-dom/client';
import { AllComponentsList } from "./AllComponents";
import "./styles/main.css"
import reportWebVitals from "./reportWebVitals";

AllComponentsList.forEach((value) => {
  const elementList = document.getElementsByTagName(value.tag);

  for (const element of elementList) {
    const props = {};
    for (const attribute of element.attributes) {
      props[attribute.name] = attribute.value;
    }
    const root = createRoot(element);
    root.render(<value.element {...props} />);
  }
});
