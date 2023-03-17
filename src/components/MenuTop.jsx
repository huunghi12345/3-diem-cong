import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuTop() {
  return (
    <div className="bg-primary">
      <Container fluid="lg">
        <div className="py-3 text-white">
          <Row>
            <Col>
              <div className=" d-flex align-items-center gap-2">
                <div className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: 30, height: "auto" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
                <div className="title">
                  <h3 className="m-0 text-white">
                    <Link to={"/"} className="text-white text-decoration-none">
                      Example06
                    </Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-end align-items-center">
                <Dropdown>
                  <Dropdown.Toggle>
                    <div className="dr-down">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: 30, height: "auto" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/products">
                      Product
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/categories">
                      Category
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default MenuTop;
