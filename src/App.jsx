import React, { Component } from "react";
import StudentList from "./components/StudentsList";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  render() {
    return (
      <div>
        <StudentList />
      </div>
    );
  }
}

export default App;
