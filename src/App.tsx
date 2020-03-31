import React from "react";
import BcForm from "./bcForm";

import "./App.scss";
import fields from "./formConfig.json";

function App() {
  return (
    <div className="bc-app">
      <div className="bc-app__form-wrapper">
        <BcForm fields={fields} />
      </div>
    </div>
  );
}

export default App;
