import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "./JordanSinglePageCustomCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productContent } from "./Type";
import ProductService from "./ProductService";

function JordanSinglePage() {
  const [post, setPost] = useState<productContent>({} as productContent);
  const { id } = useParams<{ id: string }>();
  const service: ProductService = new ProductService();

  useEffect(() => {
    service.getById(id, "posts").then((data) => setPost(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <CustomCard
        pic={post.pic}
        name={post.name}
        price={post.price}
        desc={post.desc}
      />
    </div>
  );
}

export default JordanSinglePage;
