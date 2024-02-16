import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import rose from './rose.jpeg';

export default function UserList() {
  const [allUsers, setAllUsers] = useState([]);
  const baseRoute = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios.get
    ("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setAllUsers(response.data);
    });
  };

  return (
    <div>
      <h2>User Details</h2>
      <Row xs={1} md={3} className="g-2">
        {allUsers.map((user) => (
          <Col key={user.id}>
            <Card>
              <Card.Img variant="top" src={rose} /> 
              <Card.Body>
                <Card.Title>{user.name}
                </Card.Title>
                <Card.Text>Phone - 
                {user.phone}</Card.Text>
                <Card.Text>Website - 
                {user.website}</Card.Text>

                <Card.Text>
                  <Link to={baseRoute + user.id}>View more..</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}