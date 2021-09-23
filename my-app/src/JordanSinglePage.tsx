import React, {} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "./JordanSinglePageCustomCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {PostWithDescription} from "./PostWithDescription";

  
  function JordanSinglePage() {
    const [post, setPost] = useState<PostWithDescription>({} as PostWithDescription);
  const {id} = useParams<{ id: string }>();
    useEffect(() => {
      fetch("http://localhost:3004/posts/" + id)
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          //setTimeout(() => {
          setPost(myJson);
          //}, 10000);
        });
    }, [id]);
    
   return (
      <div className="App">
            <CustomCard pic={post.pic}
                  name={post.name}
                  
                  desc={post.desc}
                  price={post.price}/> 
      </div>
    
    );
    
  }


export default JordanSinglePage;