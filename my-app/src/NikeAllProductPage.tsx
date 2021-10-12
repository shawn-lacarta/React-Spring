/* eslint-disable array-callback-return */
import React from "react";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import SportCustomCardAPP from "./NikeAllProductPageCustomCard";
import { SearchContext } from "./SearchContext";
import SearchBar from "./SearchBar";
import { productContent } from "./Type";
import NikeProductService from "./NikeProductService";

function NikeAllProductPage() {
  const [postList, setPost] = useState<productContent[]>([]);
  const { searchTerm } = useContext(SearchContext);
  const service: NikeProductService = new NikeProductService();

  useEffect(() => {
    service.getAllPost("nike").then((data) => setPost(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Container>
        <Row id="button_space">
          <h1 className="site_title">Nike</h1>
          <SearchBar />
        </Row>
        <Row>
          {postList
            .filter((val) => {
              return (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                searchTerm === ""
              );
            })
            .map((post: productContent) => {
              console.log(post.pic);
              return (
                <Col md={6}>
                  <SportCustomCardAPP
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

export default NikeAllProductPage;
