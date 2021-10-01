/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import JordanSinglePage from "./JordanSinglePage";
import JordanAllProductPage from "./JordanAllProductPage";
import SportAllProductPage from "./NikeAllProductPage";
import NikeSinglePage from "./NikeSinglePage";
import Home from "./Home";
import SearchContextProvider from "./SearchContext";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";

function App() {
 
 
  return (
    
    <SearchContextProvider>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand nav_title" href="/">Sole Store ZH</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link navbar_link" href="/JordanAllProductPage">Jordan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_link" href="/SportAllProductPage">Nike</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_link" href="/NewsLetter">News Letter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_link" href="/ContactUs">Contact Us</a>
            </li>
          </ul>
       
      </nav>
      <Container>
        <Row>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/SportAllProductPage"} component={SportAllProductPage} />
              <Route exact path={"/JordanAllProductPage"} component={JordanAllProductPage} />
              <Route exact path={"/JordanSinglePage/:id"} component={JordanSinglePage} />
              <Route exact path={"/NikeSinglePage/:id"} component={NikeSinglePage} />
              <Route exact path={"/ContactUs"} component={ContactUs} />
              <Route exact path={"/NewsLetter"} component={NewsLetter}></Route>
            </Switch>
          </BrowserRouter>

        </Row>
      </Container>

    </div>

    <footer className="text-center text-white fixed-bottom footer">

  <div className="container p-4"></div>
  

 
  <div className="text-center p-3 footer">
    © 2021 Copyright: Shawn Lacarta
  </div>
 
</footer>
    
    </SearchContextProvider>
  
  );
}

export default App;
