import React from "react";

import Body from "./pages/Home/Body.js";
import Footer from "./pages/Home/Footer.js";
import Header from "./pages/Home/Header.js";
import NavigationBar from "./components/NavigationBar.js";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
