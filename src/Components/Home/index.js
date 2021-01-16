import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../Styles";

const Home = () => {
  const email = useSelector((state) => state.email);
  return <Container style={{ color: "#fff" }}>Hello {email}</Container>;
};

export default Home;
