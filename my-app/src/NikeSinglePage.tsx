import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SportCustomCard from "./NikeCustomCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productContent } from "./Type";
import ProductService from "./ProductService";

function NikeSinglePage() {
  const [postList, setPost] = useState<productContent[]>([]);
  const { id } = useParams<{ id: string }>();
  const service: ProductService = new ProductService();

  useEffect(() => {
    service.getAllPost("posts").then((data) => setPost(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let post: productContent | undefined;
  post = postList.find((product) => product.id === parseInt(id));
  if (post)
    return (
      <div className="App">
        <SportCustomCard
          pic={post.pic}
          name={post.name}
          price={post.price}
          desc={post.desc}
        />
      </div>
    );
  return <div></div>;
}

export default NikeSinglePage;
