/* eslint-disable array-callback-return */
import React from "react";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomCardAPP from "./JordanAllProductPageCustomCard";
import { SearchContext } from "./SearchContext";
import {PostWithId} from "./PostWithId";

function JordanAllProductPage() {
  const [postList, setPost] = useState<PostWithId[]>([]);
  const {searchTerm, addSearchTerm} = useContext(SearchContext);

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //setTimeout(() => {
        setPost(myJson);
        //}, 10000);
      });
  }, []);



  return (
    <div className="App">

      <Container>
        <Row id="button_space">
          <h1 className="site_title">Jordan</h1>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={event => { addSearchTerm(event.target.value) }} />s
        </Row>
        <Row>
       
          {postList.filter((val) => {
           return val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "";
          }).map((post: PostWithId) => {
            console.log(post.pic);
            return (
              <Col md={6}>
                <CustomCardAPP
                  pic={post.pic}
                  name={post.name}
                  id={post.id}
                  price={post.price}
                />
                <br />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default JordanAllProductPage;
