import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  GET_ALL_CATEGORIES,
  GET_PRODUCT_ID,
  POST_ADD_PRODUCT,
  PUT_EDIT_PRODUCT,
} from "../api/apiService.js";

function EditProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState({
    idProduct: "",
    title: "",
    body: "",
    slug: "",
    idCategory: 0,
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GET_PRODUCT_ID("products", id)
      .then((res) => {
        setProducts({
          idProduct: res.data.idProduct,
          title: res.data.title,
          body: res.data.body,
          slug: res.data.slug,
          idCategory: res.data.category.idCategory,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProducts({
      ...products,
      [name]: value,
    });
  };

  const editProduct = (e) => {
    e.preventDefault();
    const a = ["title", "body", "slug"];
    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      if (products[element] === "") {
        alert("Chua nhap du thong tin");
        return;
      }
    }
    if (products.idCategory === 0) {
      alert("Chua nhap du thong tin");
      return;
    }
    console.table(products);
    PUT_EDIT_PRODUCT(`products/${products.idProduct}`, products)
      .then((res) => {
        if (res.data === 1) {
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ maxWidth: 600 }} className="mx-auto">
      <div className="border rounded shadow-lg mt-3 p-3">
        <h3 className="text-uppercase text-center mb-3">edit product</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={products.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={3}
              placeholder="Body"
              name="body"
              value={products.body}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              placeholder="Slug"
              name="slug"
              value={products.slug}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Choose Category</Form.Label>
            <Form.Select
              value={products.idCategory}
              name="idCategory"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {categories.map((item) => (
                <option key={item.idCategory} value={item.idCategory}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
            onClick={editProduct}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditProduct;
