//npm i react-axios
/*
The useParams hook returns an 
object of key/value pairs of the 
dynamic params from the current 
URL that were matched by the 
<Route path>. Child routes inherit 
all params from their parent routes.
*/
/*
Axios, which is a popular library
is mainly used to send 
asynchronous HTTP requests to 
REST endpoints. This library is 
very useful to perform CRUD 
operations.This popular library 
is used to communicate with the 
backend. Axios supports the 
Promise API, native to JS ES6.
Using Axios we make API requests 
in our application. Once the 
request is made we get the data 
in Return, and then we use this
data in our project. 
*/
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
//import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

const initialObj = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default function User() {
  const [user, setUser] = useState(initialObj);
  //It is used to read route parameters
  const { id } = useParams();

  useEffect(() => {
    console.log("ID ::", id);
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    //passing dynamic ids for  fetching data from backend services
    axios.get("https://jsonplaceholder.typicode.com/users/"+id).then((response) => {
        console.log(response.data);
        setUser(response.data);
        let address = {
          street: response.data.address.street,
          suite: response.data.address.suite,
          city: response.data.address.city,
          zipcode: response.data.address.zipcode,
        };
        let userObject = {
          id: response.data.id,
          name: response.data.name,
          username: response.data.username,
          email: response.data.email,
          address: address,
          phone: response.data.phone,
          website: response.data.website,
        };
        setUser(userObject);
        console.log("address ::", address);
        console.log("userObject ::", userObject);
      });
  };

  return (
    <div>
      <h2>User</h2>
      <Row>
     
        <Card>
          {/*<Card.Img variant="top" src={item.imageUrl} />*/}
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>Email - {user.email}</Card.Text>
            <Card.Text>Phone - {user.phone}</Card.Text>
            <Card.Text>Website - {user.website}</Card.Text>
           {/* <Card.Text>city - {user.address.city}</Card.Text> */}
          </Card.Body>
        </Card>
       
      </Row>
    </div>
  );
}