import React, { useState } from "react";
import CourseMenu from "./components/CourseMenu/CourseMenu";
import "./App.css";
import LogInPage from "./components/LoginPage/LoginPage";
function App() {
  const [isLoggedIn, setloggedIn] = useState(false);
  return <>{isLoggedIn ? <CourseMenu /> : <LogInPage login={setloggedIn} />}</>;
}

export default App;
