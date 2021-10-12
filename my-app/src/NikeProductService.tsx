import axios from "axios";

const product = axios.create({ baseURL: "http://localhost:8080/" });

export default class ServiceProduct {
  getAllPost(item: string) {
    return product.get("/nikeCard").then((response) => response.data);
  }

  getById(id: string, item:string){
    return product.get("/nikeCard/" +id).then((response) => response.data);
  }

  getAllNewsLetter() {
    return product.get("nike").then((response) => response.data);
  }
}
