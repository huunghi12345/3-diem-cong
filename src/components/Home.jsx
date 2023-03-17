import { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DELETE_PRODUCT_ID, GET_ALL_PRODUCTS } from "../api/apiService.js";

function Home() {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    GET_ALL_PRODUCTS("products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    DELETE_PRODUCT_ID(`products/${id}`).then((res) => {
      if (res.data === 1) {
        setIsDelete(true);
      }
      // update product
      setProducts(products.filter((key) => key.idProduct !== id));
    });
  };

  return (
    <div className="mt-3">
      {isDelete && <Alert variant={"success"}>Delete successfully</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Slug</th>
            <th>Category</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.idProduct}>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.slug}</td>
              <td>{item.category.name}</td>
              <td>
                <Button variant="primary" size="sm">
                  <Link
                    className="text-white text-decoration-none"
                    to={`/edit/product/${item.idProduct}`}
                  >
                    Edit
                  </Link>
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    handleDelete(item.idProduct);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
