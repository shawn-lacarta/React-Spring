import React, {} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SportCustomCard from "./NikeCustomCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {PostWithDescription} from "./PostWithDescription"
  
  function NikeSinglePage() {
    const [postList, setPost] = useState<PostWithDescription[]>([]);
  const {id} = useParams<{ id: string }>();
    useEffect(() => {
      fetch("http://localhost:3004/sport")
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          //setTimeout(() => {
          setPost(myJson);
          //}, 10000);
        });
    }, []);
    let post : PostWithDescription | undefined;
    post = postList.find(product => product.id === parseInt(id))
    if(post) return (
      <div className="App">
            <SportCustomCard pic={ post.pic}
                  name={post.name}
                  desc={post.desc}
                  price={post.price}/> 
      </div>
    
    );
    return (<div></div>)
  }


export default NikeSinglePage;