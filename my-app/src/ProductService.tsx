import axios from "axios";

const product = axios.create({ baseURL: "http://localhost:8080/" });

export default class ServiceProduct {
  getAllPost(item: string) {
    return product.get("/jordanCard").then((response) => response.data);
  }

  getById(id: string, item:string){
    return product.get("/jordanCard/" +id).then((response) => response.data);
  }

  getAllNewsLetter() {
    return product.get("jordan").then((response) => response.data);
  }
}
