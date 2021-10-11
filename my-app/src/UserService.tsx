import axios from "axios";

const product = axios.create({ baseURL: "http://localhost:8080/" });

export default class UserService {

  postData(first_name: string, last_name: string, email: string){
      const userData = {id: this.getAllUsers.length, first_name, last_name, email};
      product.post("users", userData)
      
  }
  getAllUsers() {
    return product.get("users").then((response) => response.data);
  }
}