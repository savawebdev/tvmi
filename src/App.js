import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
};

export default App;
