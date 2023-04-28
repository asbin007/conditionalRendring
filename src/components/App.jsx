import React from "react";
import Form from "./Form";

var userIsRegistered = 1;

function App() {
  return (
    <div className="container">
      <Form isRegister={userIsRegistered} />
    </div>
  );
}

export default App;
