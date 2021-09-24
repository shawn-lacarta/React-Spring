import axios from "axios";

const product = axios.create({ baseURL: "http://localhost:3004/" });

export default class ServiceProduct {
  getAllPost(item: string) {
    return product.get(item).then((response) => response.data);
  }

  getById(id: string, item:string){
    return product.get(item+"/"+id).then((response) => response.data);
  }
}
