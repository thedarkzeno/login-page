import React from "react";
import { useSelector } from "react-redux";

import Home from "./Components/Home";
import Login from "./Components/Login";

export default function Routes() {
  const ReduxState = useSelector((state) => state);

  if (ReduxState.email === "") {
    return <Login />;
  } else {
    return <Home />;
  }
}
