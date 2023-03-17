import MenuTop from "./components/MenuTop";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Category from "./components/Category";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div>
      <MenuTop />
      <Container fluid="md">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/edit/product/:id" element={<EditProduct />} />
          <Route exact path="/categories" element={<Category />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
