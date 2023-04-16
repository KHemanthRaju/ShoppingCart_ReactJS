import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              placeholder="search"
              style={{ width: 500 }}
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{24}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
