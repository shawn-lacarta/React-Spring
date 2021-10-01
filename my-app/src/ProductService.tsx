import axios from "axios";

const product = axios.create({ baseURL: "http://localhost:3004/" });

export default class ServiceProduct {
  getAllPost(item: string) {
    return product.get(item).then((response) => response.data);
  }

  getById(id: string, item:string){
    return product.get(item+"/"+id).then((response) => response.data);
  }

  postData(firstName: string, lastName: string, email: string){
      const userData = {id: this.getAllNewsLetter.length, firstName, lastName, email};
      product.post("newsLetter", userData)
      
  }
  getAllNewsLetter() {
    return product.get("newsLetter").then((response) => response.data);
  }
}
