import React from "react";
import styled from "styled-components";

import NavigationBar from "./components/NavigationBar.js";
import Footer from "./pages/Home/Footer.js";
import Header from "./pages/Home/Header.js";

function App() {
  return (
    <StyleApp>
      <NavigationBar />
      <Header />
      <Footer />
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div``;
